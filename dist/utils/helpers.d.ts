/**
 * Determines the time group label for a given timestamp
 * @param timestamp - Unix timestamp in milliseconds
 * @returns A string representing the time group (e.g., 'Today', 'Yesterday', 'Last week')
 */
export declare const getTimeGroup: (timestamp: number) => string;
/**
 * Groups an array of conversations by time periods and sorts them by timestamp
 * @param conversations - A record of conversation histories keyed by their id, can be either ConversationHistories or SearchableChatHistories
 * @returns An object with time period keys (e.g., "Today", "Yesterday") and arrays of conversations as values
 */
export declare const groupConversationsByTime: <T extends {
    lastSaved: number;
}>(conversations: Record<string, T>) => Record<string, T[]>;
