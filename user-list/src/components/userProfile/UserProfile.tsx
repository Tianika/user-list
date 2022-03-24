import './userProfile.scss';

const UserProfile = () => {
  return (
    <div className="wrapper">
      <h2 className="title">Профиль пользователя</h2>
      <button className="edit-button">Редактировать</button>
      <div className="data-container">
        <div className="data-title">Name</div>
        <input className="data-input" type="text"></input>

        <div className="data-title">Name</div>
        <input className="data-input edit not-valid" type="text"></input>

        <div className="data-title ">Name</div>
        <input className="data-input comment" type="text"></input>
      </div>
      <button className="send-button active">Отправить</button>
    </div>
  );
};

export default UserProfile;
