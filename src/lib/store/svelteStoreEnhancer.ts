import type { StoreCreator } from "redux";

export function svelteStoreEnhancer(
    createStoreApi: StoreCreator
) {
   return function (reducer, initialState) {
    const reduxStore = createStoreApi(reducer, initialState);
    return {
      ...reduxStore,
      subscribe(fn: ((value: any) => void)) {
        fn(reduxStore.getState());
        return reduxStore.subscribe(() => {
          fn(reduxStore.getState());
        });
      }
    }
  }
}
