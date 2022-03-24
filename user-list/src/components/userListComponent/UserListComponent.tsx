import { useEffect, useState } from 'react';
import './userListComponent.scss';
import SortBar from '../sortBar/SortBar';
import { User } from '../userList/types';
import UserList from '../userList/UserList';
import UserProfile from '../userProfile/UserProfile';

const UserListComponent = () => {
  let state: Array<User | null> = [];
  const URL_FOR_FETCH = 'https://jsonplaceholder.typicode.com/users/';

  const [users, setUsers] = useState(state);
  const [isDetaled, setIsDetaled] = useState(false);
  const [userNum, setUserNum] = useState(0);

  const sortByCity = () => {
    users.sort((a, b): number => {
      let n = 0;

      if (a && b) {
        n =
          a.address.city > b.address.city
            ? 1
            : a.address.city < b.address.city
            ? -1
            : 0;
      }

      return n;
    });

    setUsers([...users]);
  };

  const sortByCompany = () => {
    users.sort((a, b): number => {
      let n = 0;

      if (a && b) {
        n =
          a.company.name > b.company.name
            ? 1
            : a.company.name < b.company.name
            ? -1
            : 0;
      }

      return n;
    });

    setUsers([...users]);
  };

  const showInfo = (event: any) => {
    setUserNum(event.target.dataset.id);
    setIsDetaled(true);
  };

  useEffect(() => {
    fetch(URL_FOR_FETCH)
      .then((response: Response) => response.json())
      .then((result: Array<User>) => {
        setUsers([...result]);
      });
  }, []);

  return (
    <div className="user-list-component">
      <SortBar sortByCity={sortByCity} sortByCompany={sortByCompany} />
      {isDetaled ? (
        <UserProfile userData={users[userNum]} />
      ) : (
        <UserList users={users} showInfo={showInfo} />
      )}
    </div>
  );
};

export default UserListComponent;
