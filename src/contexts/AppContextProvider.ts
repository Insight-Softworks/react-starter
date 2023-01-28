import { createContext } from 'use-context-selector';
import { ThunkAction } from '../hooks/useThunkReducer';
import AppState from '../models/AppState';

// @ts-expect-error Initializer
const AppStateContext = createContext<AppState>();
const DispatchContext =
  // @ts-expect-error Initializer
  createContext<(action: ThunkAction<AppState>) => Promise<void>>();

export { AppStateContext, DispatchContext };
