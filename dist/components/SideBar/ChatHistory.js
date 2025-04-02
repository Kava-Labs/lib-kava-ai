import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useMemo } from "react";
import { ChatHistoryItem } from "./ChatHistoryItem";
import styles from "./ChatHistory.module.css";
import { groupConversationsByTime } from "../../utils/helpers";
import { Bot } from "lucide-react";
export const ChatHistory = memo(({ chatHistories, onSelectConversation, activeConversationId, onDeleteConversation, onUpdateConversationTitle, }) => {
    const groupedHistories = useMemo(() => groupConversationsByTime(chatHistories), [chatHistories]);
    return (_jsx("div", { className: styles.chatHistoryContainer, children: Object.values(chatHistories).length === 0 ? (_jsxs("div", { className: styles.emptyState, children: [_jsx(Bot, { className: styles.emptyStateIcon, size: 24 }), _jsx("small", { className: styles.emptyStateText, children: "Start a new chat to begin" })] })) : (Object.entries(groupedHistories).map(([timeGroup, groupConversations]) => (_jsxs("div", { className: styles.timeGroup, children: [_jsx("small", { className: styles.timeGroupTitle, children: timeGroup }), _jsx("div", { className: styles.timeGroupContent, children: groupConversations.map((conversation) => (_jsx(ChatHistoryItem, { conversation: conversation, onHistoryItemClick: () => onSelectConversation(conversation.id), deleteConversation: onDeleteConversation, updateConversationTitle: onUpdateConversationTitle, isSelected: activeConversationId === conversation.id }, conversation.id))) })] }, timeGroup)))) }));
});
