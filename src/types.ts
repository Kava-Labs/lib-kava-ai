import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionMessageParam,
  ChatCompletionToolMessageParam
} from 'openai/resources';

export type ConversationHistory = {
  id: string;
  model: string;
  title: string;
  lastSaved: number;
  tokensRemaining: number;
};

export type ConversationHistories = Record<string, ConversationHistory>;

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
