import { idbDatabase, CONVERSATION_STORE_NAME } from "./idb";
export async function getAllConversations() {
    const db = await idbDatabase();
    const tx = db.transaction(CONVERSATION_STORE_NAME, "readonly");
    const store = tx.objectStore(CONVERSATION_STORE_NAME);
    const request = store.getAll();
    return new Promise((resolve, reject) => {
        request.addEventListener("success", () => {
            const results = request.result;
            resolve(results.reduce((acc, curr) => {
                acc[curr.id] = curr;
                return acc;
            }, {}));
        });
        request.addEventListener("error", () => reject(new Error(`indexedDB: failed to fetch all conversations`)));
    });
}
