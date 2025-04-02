import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './SearchHistoryModal.module.css';
import { useRef } from 'react';
import { X } from 'lucide-react';
import { ButtonIcon } from '../ButtonIcon';
import { useIsMobileLayout } from '../../hooks';
import { formatContentSnippet, formatConversationTitle, highlightMatch } from '../../utils';
export const SearchHistoryModalBody = ({ groupedConversations, onSelectConversation, handleSearchTermChange, onClose, searchTerm, }) => {
    const inputRef = useRef(null);
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
            return;
        }
        if (e.key === 'Enter') {
            //  if there's only one remaining search match, allow it to be selected with the enter key
            const allConversations = Object.values(groupedConversations).flat();
            if (allConversations.length === 1) {
                onSelectConversation(allConversations[0].id);
                onClose();
            }
        }
    };
    const onHistoryItemClick = (id) => {
        onSelectConversation(id);
        onClose();
    };
    const isMobileLayout = useIsMobileLayout();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: styles.searchInputWrapper, children: [_jsx("input", { ref: inputRef, type: "text", className: styles.searchInput, placeholder: "Search conversations...", value: searchTerm, onChange: (e) => handleSearchTermChange(e.target.value), onKeyDown: handleKeyDown, autoFocus: true }), _jsx(ButtonIcon, { className: isMobileLayout ? styles.hidden : styles.searchCloseIcon, icon: X, "aria-label": "Close search modal", onClick: onClose })] }), _jsx("div", { className: styles.results, children: Object.keys(groupedConversations).length === 0 ? (_jsx("div", { className: styles.noResults, children: "No results" })) : (Object.entries(groupedConversations).map(([timeGroup, conversations]) => (_jsxs("div", { className: styles.timeGroup, children: [_jsx("small", { className: styles.timeGroupTitle, children: timeGroup }), conversations.map((conversation) => (_jsxs("div", { className: styles.conversationItem, onClick: () => onHistoryItemClick(conversation.id), children: [_jsx("p", { className: styles.conversationTitle, dangerouslySetInnerHTML: {
                                        __html: highlightMatch(formatConversationTitle(conversation.title, 50), searchTerm),
                                    } }), _jsx("p", { className: styles.conversationSnippet, dangerouslySetInnerHTML: {
                                        __html: highlightMatch(formatContentSnippet(conversation, searchTerm), searchTerm),
                                    } })] }, conversation.id)))] }, timeGroup)))) })] }));
};
