import { jsx as _jsx } from "react/jsx-runtime";
import styles from './SearchHistoryModal.module.css';
import { ModalWrapper } from './ModalWrapper';
import { useRef, useState } from 'react';
import { SearchHistoryModalBody } from './SearchHistoryModalBody';
import { groupAndFilterConversations } from '../../utils';
export const SearchHistoryModal = ({ searchableHistory, onSelectConversation, onCloseSearchHistory, }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const modalRef = useRef(null);
    const handleSearchTermChange = (text) => {
        setSearchTerm(text);
    };
    const handleClose = () => {
        onCloseSearchHistory();
        setSearchTerm('');
    };
    const groupedConversations = groupAndFilterConversations(searchableHistory, searchTerm);
    return (_jsx("div", { className: styles.container, children: _jsx(ModalWrapper, { modalRef: modalRef, onClose: handleClose, children: _jsx(SearchHistoryModalBody, { groupedConversations: groupedConversations, onSelectConversation: onSelectConversation, handleSearchTermChange: handleSearchTermChange, onClose: handleClose, searchTerm: searchTerm }) }) }));
};
