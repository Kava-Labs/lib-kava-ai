import type { ChatCompletionAssistantMessageParam, ChatCompletionMessageParam, ChatCompletionToolMessageParam } from "openai/resources/index";
export type ConversationHistory = {
    id: string;
    model: string;
    title: string;
    lastSaved: number;
    tokensRemaining: number;
};
export type ConversationHistories = Record<string, ConversationHistory>;
export type MessageHistory = {
    id: string;
    messages: ChatMessage[];
};
export type ChatMessage = ChatCompletionMessageParam | ChatCompletionToolMessageParam | ChatCompletionAssistantMessageParam;
export type SearchableChatHistory = {
    id: string;
    title: string;
    messages: ChatMessage[];
    lastSaved: number;
};
export type SearchableChatHistories = Record<string, SearchableChatHistory>;
export type GroupedSearchHistories = Record<string, SearchableChatHistory[]>;
