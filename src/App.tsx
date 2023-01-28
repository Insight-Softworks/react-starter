import React from "react";
import useThunkReducer from "./hooks/useThunkReducer";
import { AppStateContext, DispatchContext } from "./contexts/AppContextProvider";
import AppState from "./models/AppState";
import UserDetails from './components/UserDetails';
import Balance from './components/Balance';

const defaultState: AppState = {
  user: {
    id: '1',
    username: 'johndoe',
    firstName: 'John',
    lastName: 'Doe'
  },
  balance: {
    value: 20000
  },
  transactions: []
};

function App() {
  const [state, dispatch] = useThunkReducer<AppState>(defaultState);

  return (
    <AppStateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
        <UserDetails />
        <Balance />
      </DispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default App;
