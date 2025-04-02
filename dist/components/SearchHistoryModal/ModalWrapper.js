import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './SearchHistoryModal.module.css';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon';
export const ModalWrapper = ({ children, modalRef, onClose, closeOnOutsideClick = true, }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closeOnOutsideClick &&
                modalRef.current &&
                !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeOnOutsideClick, onClose, modalRef]);
    return ReactDOM.createPortal(_jsx("div", { className: styles.modalOverlay, children: _jsxs("div", { className: styles.modal, ref: modalRef, children: [_jsx(ButtonIcon, { className: `${styles.iconButton} ${styles.closeButton}`, icon: X, "aria-label": "Close search modal", onClick: onClose }), children] }) }), document.body);
};
