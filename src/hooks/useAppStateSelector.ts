import { useContextSelector } from 'use-context-selector';
import { AppStateContext } from '../contexts/AppContextProvider';
import AppState from '../models/AppState';

export default function useAppStateSelector<TSelectedProps>(
  selectorFn: (state: AppState) => TSelectedProps,
): TSelectedProps {
  return useContextSelector<AppState, TSelectedProps>(
    AppStateContext,
    selectorFn,
  );
}
