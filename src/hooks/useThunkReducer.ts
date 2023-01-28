import { useCallback, useRef, useState } from "react";

export type Dispatch<TState> = (action: ThunkAction<TState>) => Promise<void>

/** A thunk action that can be dispatched by the {@link useThunkReducer}. */
export type ThunkAction<TState> = (
  dispatch: Dispatch<TState>,
  getState: () => Readonly<TState>,
) => Promise<TState | undefined | void> | TState | undefined | void;

/**
 * Asynchronous action reducer inspired by the popular [Redux Thunk Middleware](https://github.com/reduxjs/redux-thunk).
 *
 * @param initialState
 */
export const useThunkReducer = function <TState>(initialState: TState): [TState, Dispatch<TState>] {
  const [state, setState] = useState<TState>(initialState);

  const stateRef = useRef<TState>(state);
  const dispatch = useCallback(async (action: ThunkAction<TState>) => {
    try {
      const nextState = await action(dispatch, () => stateRef.current);
      if (typeof nextState !== "undefined") {
        stateRef.current = nextState; // Update the ref right away; synchronously
        setState(nextState as TState);
      }
    } catch (error) {
      console.error(`Dispatching action ${action.name} failed`, { error });
      throw error;
    }
  }, []);

  return [state, dispatch];
};

export default useThunkReducer;
