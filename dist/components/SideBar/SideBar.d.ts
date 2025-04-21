import type { ConversationHistories } from "../../types/conversationHistories";
import { JSX } from "react";
export interface SideBarProps {
    activeConversationId: string | null;
    conversationHistories: ConversationHistories | null;
    onSelectConversation: (id: string) => void;
    onDeleteConversation: (id: string) => void;
    onUpdateConversationTitle: (id: string, newTitle: string) => void;
    onOpenSearchModal: () => void;
    onCloseClick: () => void;
    isSideBarOpen: boolean;
    SideBarLogo: JSX.Element;
    styles: Record<string, string>;
    links?: {
        title: string;
        url: string;
        iconURL?: string;
    }[];
}
export declare const SideBar: ({ activeConversationId, conversationHistories, onSelectConversation, onDeleteConversation, onUpdateConversationTitle, onOpenSearchModal, onCloseClick, isSideBarOpen, SideBarLogo, styles, links, }: SideBarProps) => import("react/jsx-runtime").JSX.Element;
