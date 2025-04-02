import { ConversationHistory, MessageHistory, SearchableChatHistories } from "../types";
/**
 * Merges conversation data with their respective messages, excluding conversations without messages.
 * @param messageHistory - Array of objects containing conversation IDs and their messages.
 * @param conversationHistory - Array of objects containing conversation IDs and their titles (and other metadata).
 * @returns An object indexed by conversation ID containing titles and associated messages to be used in search.
 */
export declare function mergeTitleAndMessages(messageHistory: MessageHistory[], conversationHistory: ConversationHistory[]): SearchableChatHistories;
