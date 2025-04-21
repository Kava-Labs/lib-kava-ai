import { ChatHistory } from "./ChatHistory";
import type { ConversationHistories } from "../../types/conversationHistories";
import { SideBarControls } from "./SideBarControls";
import { useIsMobileLayout } from "../../hooks/useIsMobileLayout";
import { JSX } from "react";
import { ArrowUpRight } from "lucide-react";

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
  links?: { title: string; url: string; iconURL?: string }[];
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
  links,
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

  const sideBarLinks = links ? links : [];

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

      {
        <div className={styles.sidebarLinkContainer}>
          {sideBarLinks.map((link) => {
            return (
              <div
                key={`${link.title}-${link.url}`}
                className={styles.sidebarLink}
                onClick={() => window.open(link.url, "_blank")?.focus()}
              >
                <div className={styles.sidebarLinkItemContainer}>
                  {link.iconURL ? (
                    <img
                      src={link.iconURL}
                      aria-label="link-icon"
                      width={20}
                      height={20}
                    />
                  ) : null}
                  <p> {link.title}</p>
                </div>
                <ArrowUpRight width={20} height={20} />
              </div>
            );
          })}
        </div>
      }

      <div className={styles.sidebarContent}>
        {conversationsLoaded && (
          <ChatHistory
            chatHistories={conversationHistories}
            onSelectConversation={onSelectConversation}
            activeConversationId={activeConversationId}
            onDeleteConversation={onDeleteConversation}
            onUpdateConversationTitle={onUpdateConversationTitle}
          />
        )}
      </div>
    </div>
  );
};
