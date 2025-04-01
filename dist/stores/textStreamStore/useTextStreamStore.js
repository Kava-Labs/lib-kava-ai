import { useSyncExternalStore } from "react";
export const useTextStreamStore = (store) => useSyncExternalStore(store.subscribe, store.getSnapshot);
