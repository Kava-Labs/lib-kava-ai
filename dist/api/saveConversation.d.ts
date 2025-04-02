import type { ChatMessage, ConversationHistory } from "../types";
export declare function saveConversation(conversation: ConversationHistory, messages: ChatMessage[]): Promise<string>;
