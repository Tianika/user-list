import { useEffect, useState } from 'react';
import SortBar from '../sortBar/SortBar';
import { User } from '../userList/types';
import UserList from '../userList/UserList';
import './userListComponent.scss';

const UserListComponent = () => {
  const state: Array<User | null> = [];
  const [users, setUsers] = useState(state);
  const [isLoading, setIsLoading] = useState(false);

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
      <SortBar />
      <UserList users={users} />
    </div>
  );
};

export default UserListComponent;
