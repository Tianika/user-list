import './userList.scss';

const UserList = () => {
  return (
    <div className="user-list">
      <div className="sort-buttons">
        <p className="sort-title">Сортировка</p>
        <button>по городу</button>
        <button>по компании</button>
      </div>
      <div className="user-list-items">
        <p className="user-list-title">Список пользователей</p>
        <div className="user-card">
          <div>
            ФИО: <span>Имя</span>
          </div>
          <div>
            город: <span>Город</span>
          </div>
          <div>
            компания: <span>компания</span>
          </div>
          <button className="detailed">Подробнее</button>
        </div>
        <p className="total">Найдено 10 пользователей</p>
      </div>
    </div>
  );
};

export default UserList;
