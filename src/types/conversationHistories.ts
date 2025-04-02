export type ConversationHistory = {
  id: string;
  model: string;
  title: string;
  lastSaved: number;
  tokensRemaining: number;
};

export type ConversationHistories = Record<string, ConversationHistory>;
