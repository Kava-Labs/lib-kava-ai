export declare const DATABASE_NAME = "hard_ai";
export declare const DATABASE_VERSION = 1;
export declare const CONVERSATION_STORE_NAME = "conversations";
export declare const CONVERSATION_MESSAGES_STORE_NAME = "conversation_messages";
export declare const idbEventTarget: EventTarget;
export declare function idbDatabase(): Promise<IDBDatabase>;
export declare function emitStoreUpdate(storeNames: string[], operation: string, id?: string): void;
