/**
 * Determines the time group label for a given timestamp
 * @param timestamp - Unix timestamp in milliseconds
 * @returns A string representing the time group (e.g., 'Today', 'Yesterday', 'Last week')
 */
export const getTimeGroup = (timestamp: number): string => {
  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - timestamp) / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays <= 7) return "Last week";
  if (diffDays <= 14) return "2 weeks ago";
  if (diffDays <= 30) return "Last month";
  return "Older";
};

/**
 * Groups an array of conversations by time periods and sorts them by timestamp
 * @param conversations - A record of conversation histories keyed by their id, can be either ConversationHistories or SearchableChatHistories
 * @returns An object with time period keys (e.g., "Today", "Yesterday") and arrays of conversations as values
 */
export const groupConversationsByTime = <T extends { lastSaved: number }>(
  conversations: Record<string, T>
): Record<string, T[]> => {
  return Object.values(conversations)
    .sort((a, b) => b.lastSaved - a.lastSaved)
    .reduce<Record<string, T[]>>((groups, conversation) => {
      const timeGroup = getTimeGroup(conversation.lastSaved);
      if (!groups[timeGroup]) {
        groups[timeGroup] = [];
      }
      groups[timeGroup].push(conversation);
      return groups;
    }, {});
};
