import { GroupedSearchHistories, SearchableChatHistories, SearchableChatHistory } from '../types';
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
/**
 * Formats a conversation title by removing surrounding quotes and truncating if necessary
 * @param title - The original conversation title
 * @param maxLength - Maximum length before truncation (not including ellipsis)
 * @returns Formatted title with quotes removed and truncated if longer than maxLength
 * @example
 * // Returns "Hello World"
 * formatConversationTitle('"Hello World"', 20)
 *
 * // Returns "This is a very lo...."
 * formatConversationTitle("This is a very long title", 15)
 */
export declare const formatConversationTitle: (title: string, maxLength: number) => string;
/**
 * Groups and filters conversations based on their timestamp and an optional search term.
 *
 * This function organizes conversations into time-based groups (Today, Yesterday, etc.)
 * and can filter them based on a search term that matches either the conversation title
 * or any message content.
 *
 * @param conversations - Collection of conversations to process
 * @param searchTerm - Optional term to filter conversations (matches title or message content)
 * @returns An object with time groups as keys and arrays of matching conversations as values
 */
export declare const groupAndFilterConversations: (conversations: SearchableChatHistories, searchTerm?: string) => GroupedSearchHistories;
/**
 * Wraps matched text in a string with <strong> tags, preserving case
 * @param text - The full text to search within
 * @param searchTerm - The term to wrap in bold tags
 * @returns The text with matched terms wrapped in <strong> tags if searchTerm is at least 2 characters, otherwise returns original text
 */
export declare const highlightMatch: (text: string, searchTerm?: string) => string;
/**
 * Formats a content snippet from a conversation history based on a search term
 *
 * @param conversation - The search history object containing messages to search through
 * @param searchTerm - Optional term to search for within messages (defaults to empty string)
 * @returns A formatted string snippet showing the context around the search match, or the first user message if no match
 *
 * @notes
 * - If a search term is provided, it returns up to 100 characters including the match and up to 3 preceding words
 * - If no search term is provided or no matches found, it returns the first 100 characters of the first user message
 * - System messages are ignored in the search
 */
export declare const formatContentSnippet: (conversation: SearchableChatHistory, searchTerm?: string) => string;
