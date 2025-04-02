import {beforeEach, describe, vi, afterEach, expect, it} from 'vitest';
import { getTimeGroup, groupConversationsByTime, highlightMatch } from './helpers';
import { ConversationHistories, SearchableChatHistories } from '../types';

describe('getTimeGroup', () => {
  beforeEach(() => {
    // establish a fixed date for testing
    const now = new Date('2024-02-13T12:00:00Z');
    vi.useFakeTimers();
    vi.setSystemTime(now);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return "Today" for same day timestamps', () => {
    const today = new Date('2024-02-13T10:00:00Z').getTime();
    expect(getTimeGroup(today)).toBe('Today');
  });

  it('should return "Yesterday" for previous day timestamps', () => {
    const yesterday = new Date('2024-02-12T10:00:00Z').getTime();
    expect(getTimeGroup(yesterday)).toBe('Yesterday');
  });

  it('should return "Last week" for timestamps within 7 days', () => {
    const sixDaysAgo = new Date('2024-02-07T10:00:00Z').getTime();
    expect(getTimeGroup(sixDaysAgo)).toBe('Last week');
  });

  it('should return "2 weeks ago" for timestamps within 14 days', () => {
    const twelveDaysAgo = new Date('2024-02-01T10:00:00Z').getTime();
    expect(getTimeGroup(twelveDaysAgo)).toBe('2 weeks ago');
  });

  it('should return "Last month" for timestamps within 30 days', () => {
    const twentyFiveDaysAgo = new Date('2024-01-19T10:00:00Z').getTime();
    expect(getTimeGroup(twentyFiveDaysAgo)).toBe('Last month');
  });

  it('should return "Older" for timestamps older than 30 days', () => {
    const longLongAgo = new Date('2023-01-04T10:00:00Z').getTime();
    expect(getTimeGroup(longLongAgo)).toBe('Older');
  });
});

describe('groupConversationsByTime', () => {
  let mockHistories: ConversationHistories;
  const now = new Date('2024-02-13T12:00:00Z').getTime();

  beforeEach(() => {
    vi.spyOn(Date.prototype, 'getTime').mockImplementation(() => now);

    mockHistories = {
      '1': {
        id: '1',
        title: 'Today Chat',
        lastSaved: now - 1000 * 60 * 60 * 2, // 2 hours ago
        model: 'gpt-4o-mini',
        tokensRemaining: 128000,
      },
      '2': {
        id: '2',
        title: 'Yesterday Chat',
        lastSaved: now - 1000 * 60 * 60 * 25, // 25 hours ago
        model: 'gpt-4o-mini',
        tokensRemaining: 128000,
      },
      '3': {
        id: '3',
        title: 'Last Week Chat',
        lastSaved: now - 1000 * 60 * 60 * 24 * 5, // 5 days ago
        model: 'gpt-4o-mini',
        tokensRemaining: 128000,
      },
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should group conversations by time period', () => {
    const grouped = groupConversationsByTime(mockHistories);

    expect(Object.keys(grouped)).toEqual(['Today', 'Yesterday', 'Last week']);
    expect(grouped['Today'][0].title).toBe('Today Chat');
    expect(grouped['Yesterday'][0].title).toBe('Yesterday Chat');
    expect(grouped['Last week'][0].title).toBe('Last Week Chat');
  });

  it('should sort conversations by timestamp within groups', () => {
    const anotherTodayChat = {
      id: '4',
      title: 'Another Today Chat',
      lastSaved: now - 1000 * 60 * 60, // 1 hour ago
      conversation: [],
      model: 'gpt-4o-mini',
      tokensRemaining: 128000,
    };

    mockHistories['4'] = anotherTodayChat;

    const grouped = groupConversationsByTime(mockHistories);
    expect(grouped['Today'][0].title).toBe('Another Today Chat');
    expect(grouped['Today'][1].title).toBe('Today Chat');
  });

  it('should handle empty conversations array', () => {
    const grouped = groupConversationsByTime({});
    expect(grouped).toEqual({});
  });

  it('handles searchable histories', () => {
    const mockSearchableHistories: SearchableChatHistories = {
      1: {
        id: '1',
        title: 'Bitcoin Discussion',
        lastSaved: now - 1000 * 60 * 60 * 2,
        messages: [{ role: 'user', content: 'Can I have bitcoin advice?' }],
      },
      2: {
        id: '2',
        title: 'Ethereum Chat',
        lastSaved: now - 1000 * 60 * 60 * 25,
        messages: [{ role: 'user', content: 'Where can I buy ETH?' }],
      },
      3: {
        id: '3',
        title: 'Blockchain Overview',
        lastSaved: now - 1000 * 60 * 60 * 24 * 5,
        messages: [
          { role: 'user', content: 'What is the history of blockchain?' },
        ],
      },
      4: {
        id: '4',
        title: 'Party planning tips',
        lastSaved: now - 1000 * 60 * 60 * 24 * 6,
        messages: [{ role: 'user', content: 'I need help planning.' }],
      },
    };

    const grouped = groupConversationsByTime(mockSearchableHistories);
    expect(grouped['Today'][0].title).toBe('Bitcoin Discussion');
    expect(grouped['Yesterday'][0].title).toBe('Ethereum Chat');
  });
});

describe('highlightMatch', () => {
  it('returns original text when searchTerm is empty', () => {
    const text = 'This is some sample text';
    expect(highlightMatch(text, '')).toBe(text);
  });

  it('returns original text when searchTerm is less than 2 characters', () => {
    const text = 'This is some sample text';
    expect(highlightMatch(text, 'a')).toBe(text);
  });

  it('highlights single occurrence of searchTerm', () => {
    const text = 'This is a test string';
    const searchTerm = 'test';
    const expected = 'This is a <strong>test</strong> string';
    expect(highlightMatch(text, searchTerm)).toBe(expected);
  });

  it('highlights multiple occurrences of searchTerm', () => {
    const text = 'Test this test string for test matches';
    const searchTerm = 'test';
    const expected =
      '<strong>Test</strong> this <strong>test</strong> string for <strong>test</strong> matches';
    expect(highlightMatch(text, searchTerm)).toBe(expected);
  });

  it('performs case-insensitive matching', () => {
    const text = 'Test TEST test tEsT';
    const searchTerm = 'test';
    const expected =
      '<strong>Test</strong> <strong>TEST</strong> <strong>test</strong> <strong>tEsT</strong>';
    expect(highlightMatch(text, searchTerm)).toBe(expected);
  });

  it('preserves original casing of matches', () => {
    const text = 'Testing TESTING testing';
    const searchTerm = 'testing';
    const expected =
      '<strong>Testing</strong> <strong>TESTING</strong> <strong>testing</strong>';
    expect(highlightMatch(text, searchTerm)).toBe(expected);
  });

  it('works with partial word matches', () => {
    const text = 'Testing for partial matches';
    const searchTerm = 'part';
    const expected = 'Testing for <strong>part</strong>ial matches';
    expect(highlightMatch(text, searchTerm)).toBe(expected);
  });

  it('handles empty text properly', () => {
    const text = '';
    const searchTerm = 'test';
    expect(highlightMatch(text, searchTerm)).toBe('');
  });
});

