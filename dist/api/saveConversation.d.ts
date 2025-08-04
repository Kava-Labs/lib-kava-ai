import type { ChatMessage, ConversationHistory, ToolResult } from "../types";
export declare function saveConversation(conversation: ConversationHistory, messages: ChatMessage[], toolResults?: ToolResult[]): Promise<string>;
