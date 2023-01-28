import UserType from './UserType';
import BalanceType from './BalanceType';
import TransactionType from './TransactionType';

export default interface AppState {
  user: UserType;
  balance: BalanceType;
  transactions: Array<TransactionType>;
}
