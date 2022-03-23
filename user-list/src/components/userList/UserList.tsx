import { User } from './types';
import './userList.scss';

const UserList = (props: { users: Array<User | null> }) => {
  const { users } = props;

  return (
    <div className="user-list-items">
      <p className="user-list-title">Список пользователей</p>

      {users.length > 0 ? (
        users.map((user) => {
          return user ? (
            <div className="user-card" key={user.name.toString()}>
              <div>
                ФИО: <span>{user.name.toString()}</span>
              </div>
              <div>
                город: <span>{user.address.city.toString()}</span>
              </div>
              <div>
                компания: <span>{user.company.name.toString()}</span>
              </div>
              <button className="detailed">Подробнее</button>
            </div>
          ) : null;
        })
      ) : (
        <>Загрузка списка пользователей...</>
      )}

      <p className="total">Найдено {users.length} пользователей</p>
    </div>
  );
};

export default UserList;
