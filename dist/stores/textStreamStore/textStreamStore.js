export class TextStreamStore {
    currentValue = "";
    listeners = new Set();
    setText = (value) => {
        if (this.currentValue !== value) {
            this.currentValue = value;
            this.emitChange();
        }
    };
    appendText = (chunk) => {
        if (chunk.length) {
            this.currentValue += chunk;
            this.emitChange();
        }
    };
    getSnapshot = () => {
        return this.currentValue;
    };
    subscribe = (callback) => {
        this.listeners.add(callback);
        return () => {
            this.listeners.delete(callback);
        };
    };
    emitChange() {
        for (const listener of this.listeners) {
            listener();
        }
    }
}
