import type { ChatMessage } from "../types/conversationHistories";
export declare function getConversationMessages(id: string): Promise<ChatMessage[] | null>;
