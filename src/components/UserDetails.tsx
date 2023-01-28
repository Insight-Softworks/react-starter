import React from 'react';
import useAppStateSelector from '../hooks/useAppStateSelector';
import UserType from '../models/UserType';

function UserDetails() {
  const user = useAppStateSelector<UserType>((state) => state.user);

  return (
    <div>
      Welcome, {user.firstName} {user.lastName}!
    </div>
  );
}

export default UserDetails;
