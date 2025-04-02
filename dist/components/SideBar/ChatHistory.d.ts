import { ConversationHistories } from '../../types';
interface ChatHistoryProps {
    chatHistories: ConversationHistories;
    onSelectConversation: (id: string) => void;
    activeConversationId: string | null;
    onDeleteConversation: (id: string) => void;
    onUpdateConversationTitle: (id: string, newTitle: string) => void;
}
export declare const ChatHistory: import("react").MemoExoticComponent<({ chatHistories, onSelectConversation, activeConversationId, onDeleteConversation, onUpdateConversationTitle, }: ChatHistoryProps) => import("react/jsx-runtime").JSX.Element>;
export {};
