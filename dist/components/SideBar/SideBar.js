import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChatHistory } from "./ChatHistory";
import { SideBarControls } from "./SideBarControls";
import { useIsMobileLayout } from "../../hooks/useIsMobileLayout";
import { ArrowUpRight } from "lucide-react";
export const SideBar = ({ activeConversationId, conversationHistories, onSelectConversation, onDeleteConversation, onUpdateConversationTitle, onOpenSearchModal, onCloseClick, isSideBarOpen, SideBarLogo, styles, links, }) => {
    const isMobileLayout = useIsMobileLayout();
    const isMobileSideBarOpen = isSideBarOpen && isMobileLayout;
    const isDesktopSideBarOpen = isSideBarOpen && !isMobileLayout;
    const sideBarStyles = `${styles.sidebar} ${isMobileSideBarOpen ? styles.isOpen : ""} ${isDesktopSideBarOpen ? "" : styles.isHidden}`;
    const conversationsLoaded = conversationHistories !== null;
    const hasNoConversationHistory = conversationsLoaded && Object.keys(conversationHistories).length === 0;
    const sideBarLinks = links ? links : [];
    return (_jsxs("div", { className: sideBarStyles, children: [_jsxs("div", { className: styles.sidebarHeader, children: [SideBarLogo, _jsx("div", { className: styles.buttonGroup, children: _jsx(SideBarControls, { isDisabled: hasNoConversationHistory, onCloseClick: onCloseClick, onOpenSearchModal: onOpenSearchModal }) })] }), _jsx("div", { className: styles.sidebarLinkContainer, children: sideBarLinks.map((link) => {
                    return (_jsxs("div", { className: styles.sidebarLink, onClick: () => window.open(link.url, "_blank")?.focus(), children: [_jsxs("div", { className: styles.sidebarLinkItemContainer, children: [link.iconURL ? (_jsx("img", { src: link.iconURL, "aria-label": "link-icon", width: 20, height: 20 })) : null, _jsxs("p", { children: [" ", link.title] })] }), _jsx(ArrowUpRight, { width: 20, height: 20 })] }, `${link.title}-${link.url}`));
                }) }), _jsx("div", { className: styles.sidebarContent, children: conversationsLoaded && (_jsx(ChatHistory, { chatHistories: conversationHistories, onSelectConversation: onSelectConversation, activeConversationId: activeConversationId, onDeleteConversation: onDeleteConversation, onUpdateConversationTitle: onUpdateConversationTitle })) })] }));
};
