import { SearchableChatHistories } from '../../types';
interface SearchHistoryProps {
    searchableHistory: SearchableChatHistories;
    onSelectConversation: (id: string) => void;
    onCloseSearchHistory: () => void;
}
export declare const SearchHistoryModal: ({ searchableHistory, onSelectConversation, onCloseSearchHistory, }: SearchHistoryProps) => import("react/jsx-runtime").JSX.Element;
export {};
