import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useState, useRef, useCallback, useEffect, useOptimistic } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { EllipsisVertical, Pencil, X, Trash2 } from "lucide-react";
import styles from "./ChatHistoryItem.module.css";
export const ChatHistoryItem = memo(({ conversation, onHistoryItemClick, deleteConversation, updateConversationTitle, isSelected = false, }) => {
    const { id, title } = conversation;
    const [editingTitle, setEditingTitle] = useState(false);
    const [editInputValue, setEditInputValue] = useState(title);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [optimisticTitle, setOptimisticTitle] = useOptimistic(title, (_currentState, newTitle) => newTitle);
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const handleMenuClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (editingTitle) {
            setEditInputValue(optimisticTitle);
            setEditingTitle(false);
        }
        setIsMenuOpen((prev) => !prev);
    };
    const editInputRef = useRef(editInputValue);
    const handleSaveTitle = useCallback(() => {
        const currentTitle = editInputRef.current.trim();
        if (currentTitle === '' || currentTitle === optimisticTitle) {
            setEditInputValue(optimisticTitle);
            setEditingTitle(false);
            return;
        }
        setOptimisticTitle(currentTitle);
        setEditingTitle(false);
        updateConversationTitle(id, currentTitle);
    }, [optimisticTitle, setOptimisticTitle, updateConversationTitle, id]);
    const handleDelete = (e) => {
        e.stopPropagation();
        deleteConversation(id);
        setIsMenuOpen(false);
    };
    const handleEdit = (e) => {
        e.stopPropagation();
        if (editingTitle) {
            setEditInputValue(optimisticTitle);
            setEditingTitle(false);
        }
        else {
            setEditingTitle(true);
        }
    };
    const handleKeyDown = (e) => {
        e.stopPropagation();
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSaveTitle();
        }
        else if (e.key === 'Escape') {
            setEditInputValue(title);
            setEditingTitle(false);
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            const target = event.target;
            if (containerRef.current && !containerRef.current?.contains(target)) {
                setIsMenuOpen(false);
                if (editingTitle) {
                    handleSaveTitle();
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [editInputValue, editingTitle, handleSaveTitle]);
    return (_jsxs("div", { ref: containerRef, className: `${styles.chatHistoryItem} ${isSelected ? styles.selected : ''}`, children: [_jsxs("div", { className: styles.chatHistoryContent, children: [_jsx("div", { className: styles.titleContainer, onClick: editingTitle ? undefined : onHistoryItemClick, children: editingTitle ? (_jsx("input", { ref: inputRef, type: "text", value: editInputValue, "aria-label": "Edit Title Input", onChange: (e) => {
                                setEditInputValue(e.target.value);
                                editInputRef.current = e.target.value;
                            }, onKeyDown: handleKeyDown, className: styles.chatHistoryTitleInput, onClick: (e) => {
                                e.stopPropagation();
                            }, autoFocus: true })) : (_jsx("small", { children: optimisticTitle })) }), _jsx(ButtonIcon, { className: styles.menuIcon, icon: EllipsisVertical, size: 20, "data-menu-button": "true", "aria-label": "Chat Options", onClick: handleMenuClick })] }), _jsxs("div", { className: `${styles.buttonContainer} ${isMenuOpen ? styles.show : ''}`, children: [_jsx("button", { className: styles.menuButton, onClick: handleEdit, "aria-label": editingTitle ? 'Cancel Rename Title' : 'Rename Title', children: editingTitle ? (_jsxs(_Fragment, { children: [_jsx(X, { size: 16 }), _jsx("span", { children: "Cancel" })] })) : (_jsxs(_Fragment, { children: [_jsx(Pencil, { size: 16 }), _jsx("span", { children: "Rename" })] })) }), _jsxs("button", { className: `${styles.menuButton} ${styles.deleteButton}`, "data-delete": "true", onClick: handleDelete, "aria-label": "Delete Chat", children: [_jsx(Trash2, { size: 16 }), _jsx("span", { children: "Delete" })] })] })] }));
});
