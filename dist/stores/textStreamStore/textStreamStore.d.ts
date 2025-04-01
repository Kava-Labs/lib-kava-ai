type Listener = () => void;
export declare class TextStreamStore {
    private currentValue;
    private listeners;
    setText: (value: string) => void;
    appendText: (chunk: string) => void;
    getSnapshot: () => string;
    subscribe: (callback: Listener) => (() => void);
    private emitChange;
}
export {};
