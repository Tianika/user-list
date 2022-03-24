import { useEffect, useState } from 'react';
import SortBar from '../sortBar/SortBar';
import { User } from '../userList/types';
import UserList from '../userList/UserList';
import './userListComponent.scss';

const UserListComponent = () => {
  let state: Array<User | null> = [];
  const [users, setUsers] = useState(state);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response: Response) => response.json())
        .then((result: Array<User>) => {
          setUsers([...result]);
          setIsLoading(true);
        });
    }, 3000);
  }, []);

  return (
    <div className="user-list-component">
      <SortBar sortByCity={sortByCity} sortByCompany={sortByCompany} />
      <UserList users={users} />
    </div>
  );
};

export default UserListComponent;
