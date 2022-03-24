import { useEffect, useState } from 'react';
import SortBar from '../sortBar/SortBar';
import { User } from '../userList/types';
import UserList from '../userList/UserList';
import UserProfile from '../userProfile/UserProfile';
import './userListComponent.scss';

const UserListComponent = () => {
  let state: Array<User | null> = [];
  const URL_FOR_FETCH = 'https://jsonplaceholder.typicode.com/users/';

  const [users, setUsers] = useState(state);
  const [isDetaled, setIsDetaled] = useState(false);

  const sortByCity = () => {
    users.sort((a, b): any => {
      if (a && b) {
        return a.address.city > b.address.city
          ? 1
          : a.address.city < b.address.city
          ? -1
          : 0;
      }
    });

    setUsers([...users]);
  };

  const sortByCompany = () => {
    users.sort((a, b): any => {
      if (a && b) {
        return a.company.name > b.company.name
          ? 1
          : a.company.name < b.company.name
          ? -1
          : 0;
      }
    });

    setUsers([...users]);
  };

  const showInfo = () => {
    setIsDetaled(true);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(URL_FOR_FETCH)
        .then((response: Response) => response.json())
        .then((result: Array<User>) => {
          setUsers([...result]);
        });
    }, 1000);
  }, []);

  return (
    <div className="user-list-component">
      <SortBar sortByCity={sortByCity} sortByCompany={sortByCompany} />
      {!isDetaled ? (
        <UserProfile />
      ) : (
        <UserList users={users} showInfo={showInfo} />
      )}
    </div>
  );
};

export default UserListComponent;
