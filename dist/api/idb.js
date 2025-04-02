let database = null;
export const DATABASE_NAME = "hard_ai";
export const DATABASE_VERSION = 1;
export const CONVERSATION_STORE_NAME = "conversations";
export const CONVERSATION_MESSAGES_STORE_NAME = "conversation_messages";
export const idbEventTarget = new EventTarget();
let initPromise = null;
export async function idbDatabase() {
    if (database) {
        return database;
    }
    // if this function is called twice or more and a promise is already
    // created return that instead of trying to open a the database again (which would fail)
    if (initPromise) {
        return initPromise;
    }
    // when opening the database there are two paths
    // 1. the database is already created and no upgradeneeded event is fired
    // 2. the database is new and an upgradeneeded is fired along with
    //    an implicit 'versionchange' transaction with readwrite permission
    //    this is when we set up the object store for the images
    const req = window.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
    let txState = "none";
    initPromise = new Promise((resolve, reject) => {
        req.addEventListener("success", () => {
            database = req.result; // results now hold the IDBDatabase on success
            if (txState === "none")
                resolve(database); // resolve only if no 'versionchange' tx was created
        });
        req.addEventListener("error", () => {
            reject(new Error(`indexedDB: request failed to open database. name:${DATABASE_NAME} version:${DATABASE_VERSION}`));
        });
        req.addEventListener("upgradeneeded", (ev) => {
            // @ts-expect-error : result is available in ev.target
            const db = ev.target.result;
            // @ts-expect-error : transaction is available in ev.target
            const tx = ev.target.transaction;
            if (db && tx) {
                txState = "pending";
                database = db;
            }
            if (!db.objectStoreNames.contains(CONVERSATION_STORE_NAME)) {
                // create the conversation object store
                const conversationStore = db.createObjectStore(CONVERSATION_STORE_NAME, {
                    keyPath: "id",
                });
                conversationStore.createIndex("lastSaved", "lastSaved", {
                    unique: false,
                });
            }
            if (!db.objectStoreNames.contains(CONVERSATION_MESSAGES_STORE_NAME)) {
                db.createObjectStore(CONVERSATION_MESSAGES_STORE_NAME, {
                    keyPath: "id",
                });
            }
            tx.addEventListener("complete", () => {
                txState = "complete";
                resolve(db); // resolve here in case of a transaction
            });
            tx.addEventListener("error", () => {
                reject(new Error(`indexedDB: transaction failed to create database object store: ${CONVERSATION_STORE_NAME} db_name:${DATABASE_NAME} version:${DATABASE_VERSION}`));
            });
        });
    });
    return initPromise;
}
export function emitStoreUpdate(storeNames, operation, id) {
    idbEventTarget.dispatchEvent(new CustomEvent("indexeddb-update", {
        detail: { stores: storeNames, operation, id },
    }));
}
