import React, { useContext } from 'react';
import useAppStateSelector from '../hooks/useAppStateSelector';
import useDispatch from '../hooks/useDispatch';
import UserType from '../models/UserType';

function UserDetails() {
  const user = useAppStateSelector<UserType>((state) => state.user);

  return (
    <div>
      Welcome, {user.firstName} {user.lastName}!
    </div>
  )
}

export default UserDetails;
