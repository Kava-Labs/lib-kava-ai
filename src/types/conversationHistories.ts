import type {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
  ChatCompletionToolMessageParam,
} from "openai/resources/index";

export type ConversationHistory = {
  id: string;
  model: string;
  title: string;
  lastSaved: number;
  promptTokens: number;
  completionTokens: number;
};

export type ConversationHistories = Record<string, ConversationHistory>;

export type MessageHistory = {
  id: string;
  messages: ChatMessage[];
  toolResults?: ToolResult[];
};

export type ChatMessage =
  | ChatCompletionMessageParam
  | ChatCompletionToolMessageParam
  | ChatCompletionAssistantMessageParam;

//  we need to be able to search all text and sort by time
export type SearchableChatHistory = {
  id: string;
  title: string;
  messages: ChatMessage[];
  lastSaved: number;
};

//  type returned from getSearchableHistory
export type SearchableChatHistories = Record<string, SearchableChatHistory>;

//  Record of searchable histories, indexed by the time group (Today, Yesterday, etc.)
export type GroupedSearchHistories = Record<string, SearchableChatHistory[]>;

export interface ToolResult {
  // Links to tool call id in message history
  toolCallId: string;
  toolName: string;
  // Tool output/result, could be JSON or text
  result: string;
  timestamp: number;
  error?: string;
  stackTrace?: string;
  isError?: boolean;
}
