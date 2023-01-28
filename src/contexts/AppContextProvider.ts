import React from 'react';
import { createContext } from "use-context-selector";
import { ThunkAction } from '../hooks/useThunkReducer';
import AppState from '../models/AppState';

// @ts-expect-error
const AppStateContext = createContext<AppState>();
// @ts-expect-error
const DispatchContext = createContext<(action: ThunkAction<AppState>) => Promise<void>>();

export { AppStateContext, DispatchContext };
