import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./SideBar.module.css";
import { ChatHistory } from "./ChatHistory";
import { SideBarControls } from "./SideBarControls";
import { useIsMobileLayout } from "../../hooks/useIsMobileLayout";
export const SideBar = ({ activeConversationId, conversationHistories, onSelectConversation, onDeleteConversation, onUpdateConversationTitle, onOpenSearchModal, onCloseClick, isSideBarOpen, SideBarLogo, }) => {
    const isMobileLayout = useIsMobileLayout();
    const isMobileSideBarOpen = isSideBarOpen && isMobileLayout;
    const isDesktopSideBarOpen = isSideBarOpen && !isMobileLayout;
    const sideBarStyles = `${styles.sidebar} ${isMobileSideBarOpen ? styles.isOpen : ""} ${isDesktopSideBarOpen ? "" : styles.isHidden}`;
    const hasNoConversationHistory = Object.keys(conversationHistories).length === 0;
    return (_jsxs("div", { className: sideBarStyles, children: [_jsxs("div", { className: styles.sidebarHeader, children: [SideBarLogo, _jsx("div", { className: styles.buttonGroup, children: _jsx(SideBarControls, { isDisabled: hasNoConversationHistory, onCloseClick: onCloseClick, onOpenSearchModal: onOpenSearchModal }) })] }), _jsx("div", { className: styles.sidebarContent, children: _jsx(ChatHistory, { chatHistories: conversationHistories, onSelectConversation: onSelectConversation, activeConversationId: activeConversationId, onDeleteConversation: onDeleteConversation, onUpdateConversationTitle: onUpdateConversationTitle }) })] }));
};
