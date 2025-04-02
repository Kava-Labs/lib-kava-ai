import { GroupedSearchHistories } from '../../types';
interface SearchModalBodyProps {
    groupedConversations: GroupedSearchHistories;
    onSelectConversation: (id: string) => void;
    handleSearchTermChange: (searchTerm: string) => void;
    onClose: () => void;
    searchTerm: string;
}
export declare const SearchHistoryModalBody: ({ groupedConversations, onSelectConversation, handleSearchTermChange, onClose, searchTerm, }: SearchModalBodyProps) => import("react/jsx-runtime").JSX.Element;
export {};
