import { idbDatabase, CONVERSATION_MESSAGES_STORE_NAME } from "./idb";
import type { MessageHistory } from "../types/conversationHistories";

export async function getConversationMessages(
  id: string
): Promise<MessageHistory | null> {
  const db = await idbDatabase();
  const tx = db.transaction(CONVERSATION_MESSAGES_STORE_NAME, "readonly");
  const store = tx.objectStore(CONVERSATION_MESSAGES_STORE_NAME);
  const request = store.get(id);

  return new Promise((resolve, reject) => {
    request.addEventListener("success", () => {
      if (request.result) {
        // Handle backward compatibility for existing data without toolResults
        const result = request.result;
        resolve({
          id: result.id,
          messages: result.messages,
          toolResults: result.toolResults || [],
        });
      } else {
        resolve(null);
      }
    });
    request.addEventListener("error", () =>
      reject(
        new Error(
          `indexedDB: failed to fetch conversation messages for id: ${id}`
        )
      )
    );
  });
}
