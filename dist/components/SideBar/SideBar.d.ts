import { JSX } from "react";
import { ConversationHistories } from '../../types';
export interface SideBarProps {
    activeConversationId: string | null;
    conversationHistories: ConversationHistories;
    onSelectConversation: (id: string) => void;
    onDeleteConversation: (id: string) => void;
    onUpdateConversationTitle: (id: string, newTitle: string) => void;
    onOpenSearchModal: () => void;
    onCloseClick: () => void;
    isSideBarOpen: boolean;
    SideBarLogo: JSX.Element;
}
export declare const SideBar: ({ activeConversationId, conversationHistories, onSelectConversation, onDeleteConversation, onUpdateConversationTitle, onOpenSearchModal, onCloseClick, isSideBarOpen, SideBarLogo, }: SideBarProps) => import("react/jsx-runtime").JSX.Element;
