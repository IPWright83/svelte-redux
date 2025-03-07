import { getContext } from 'svelte';
import type { Dispatch, Store } from '@reduxjs/toolkit';
import { STORE_KEY } from './constants';

/**
 * Returns a dispatcher function for the contextual Redux store, used to dispatch actions.
 *
 * Assumes a Redux store is available in context via the `StoreProvider` component, or using the
 * `STORE_KEY` directly.
 */
export function useDispatch<T = unknown>(): Dispatch {
  const store: Store<T> = getContext(STORE_KEY);
  return store?.dispatch;
}
