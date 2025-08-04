import type { MessageHistory } from "../types/conversationHistories";
export declare function getConversationMessages(id: string): Promise<MessageHistory | null>;
