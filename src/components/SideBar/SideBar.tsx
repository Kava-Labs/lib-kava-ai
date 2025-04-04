import { ChatHistory } from "./ChatHistory";
import type { ConversationHistories } from "../../types/conversationHistories";
import { SideBarControls } from "./SideBarControls";
import { useIsMobileLayout } from "../../hooks/useIsMobileLayout";
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
  styles: Record<string, string>
}

export const SideBar = ({
  activeConversationId,
  conversationHistories,
  onSelectConversation,
  onDeleteConversation,
  onUpdateConversationTitle,
  onOpenSearchModal,
  onCloseClick,
  isSideBarOpen,
  SideBarLogo,
  styles,
}: SideBarProps) => {
  const isMobileLayout = useIsMobileLayout();
  const isMobileSideBarOpen = isSideBarOpen && isMobileLayout;
  const isDesktopSideBarOpen = isSideBarOpen && !isMobileLayout;
  const sideBarStyles = `${styles.sidebar} ${
    isMobileSideBarOpen ? styles.isOpen : ""
  } ${isDesktopSideBarOpen ? "" : styles.isHidden}`;

  const conversationsLoaded = conversationHistories !== null;

  const hasNoConversationHistory =
    conversationsLoaded && Object.keys(conversationHistories).length === 0;

  return (
    <div className={sideBarStyles}>
      <div className={styles.sidebarHeader}>
        {SideBarLogo}
        <div className={styles.buttonGroup}>
          <SideBarControls
            isDisabled={hasNoConversationHistory}
            onCloseClick={onCloseClick}
            onOpenSearchModal={onOpenSearchModal}
          />
        </div>
      </div>

      <div className={styles.sidebarContent}>
        {conversationsLoaded && <ChatHistory
          chatHistories={conversationHistories}
          onSelectConversation={onSelectConversation}
          activeConversationId={activeConversationId}
          onDeleteConversation={onDeleteConversation}
          onUpdateConversationTitle={onUpdateConversationTitle}
        />}
      </div>
    </div>
  );
};
