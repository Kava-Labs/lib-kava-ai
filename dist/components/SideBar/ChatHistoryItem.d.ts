import { ConversationHistory } from '../../types';
export interface ChatHistoryItemProps {
    conversation: ConversationHistory;
    onHistoryItemClick: () => void;
    deleteConversation: (id: string) => void;
    updateConversationTitle: (id: string, newTitle: string) => void;
    isSelected?: boolean;
}
export declare const ChatHistoryItem: import("react").MemoExoticComponent<({ conversation, onHistoryItemClick, deleteConversation, updateConversationTitle, isSelected, }: ChatHistoryItemProps) => import("react/jsx-runtime").JSX.Element>;
