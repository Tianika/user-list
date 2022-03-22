import './userList.scss';

const UserList = () => {
  return (
    <div className="user-list">
      <div className="sort-buttons">
        <p className="sort-title">Сортировка</p>
        <button className="sort-button town">По городу</button>
        <button className="sort-button company">По компании</button>
      </div>
    </div>
  );
};

export default UserList;
