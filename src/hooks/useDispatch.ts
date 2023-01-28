import { useContext } from 'use-context-selector';
import { DispatchContext } from '../contexts/AppContextProvider';

export default function useDispatch() {
  return useContext(DispatchContext);
}
