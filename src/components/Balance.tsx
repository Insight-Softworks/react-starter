import React from 'react';
import useAppStateSelector from '../hooks/useAppStateSelector';
import useDispatch from '../hooks/useDispatch';
import BalanceType from '../models/BalanceType';
import AppState from '../models/AppState';
import { Dispatch } from '../hooks/useThunkReducer';

function Balance() {
  const balance = useAppStateSelector<BalanceType>((state) => state.balance);
  const dispatch = useDispatch();

  function reloadBalanceAction() {
    return async (dispatch: Dispatch<AppState>, getState: () => AppState) => {
      // const balance = await axios.get("/balance");
      const balance = { value: 50000 };
      return { ...getState(), balance };
    };
  }

  return (
    <div>
      Your balance is ${balance.value.toFixed(2)} USD.
      <button onClick={() => dispatch(reloadBalanceAction())}>Refresh</button>
    </div>
  );
}

export default Balance;
