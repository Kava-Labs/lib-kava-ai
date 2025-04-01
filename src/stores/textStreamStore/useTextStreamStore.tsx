import { useSyncExternalStore } from "react";
import { TextStreamStore } from "./textStreamStore";

export const useTextStreamStore = (store: TextStreamStore) =>
  useSyncExternalStore(store.subscribe, store.getSnapshot);
