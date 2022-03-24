import { useState } from 'react';
import { User } from '../userList/types';
import './userProfile.scss';

const UserProfile = (props: { userData: User | null }) => {
  const { userData } = props;
  console.log(userData);

  const [isNonEditable, setIsNonEditable] = useState(true);
  const [name, setName] = useState(userData?.name);
  const [username, setUsername] = useState(userData?.username);
  const [email, setEmail] = useState(userData?.email);
  const [street, setStreet] = useState(userData?.address.street);
  const [city, setCity] = useState(userData?.address.city);
  const [zipcode, setZipcode] = useState(userData?.address.zipcode);
  const [phone, setPhone] = useState(userData?.phone);
  const [website, setWebsite] = useState(userData?.website);
  const [comment, setComment] = useState('');

  const fields = [
    {
      name: 'Name',
      value: [name],
      func: (event: any) => {
        setName(event.target.value);
      },
    },
    {
      name: 'User name',
      value: [username],
      func: (event: any) => {
        setUsername(event.target.value);
      },
    },
    {
      name: 'E-mail',
      value: [email],
      func: (event: any) => {
        setEmail(event.target.value);
      },
    },
    {
      name: 'Street',
      value: [street],
      func: (event: any) => {
        setStreet(event.target.value);
      },
    },
    {
      name: 'City',
      value: [city],
      func: (event: any) => {
        setCity(event.target.value);
      },
    },
    {
      name: 'Zip code',
      value: [zipcode],
      func: (event: any) => {
        setZipcode(event.target.value);
      },
    },
    {
      name: 'Phone',
      value: [phone],
      func: (event: any) => {
        setPhone(event.target.value);
      },
    },
    {
      name: 'Website',
      value: [website],
      func: (event: any) => {
        setWebsite(event.target.value);
      },
    },
    {
      name: 'Comment',
      value: [comment],
      func: (event: any) => {
        setComment(event.target.value);
      },
    },
  ];

  const enableEditing = () => {
    setIsNonEditable(false);
  };

  return (
    <div className="wrapper">
      <h2 className="title">Профиль пользователя</h2>
      <button className="edit-button" onClick={enableEditing}>
        Редактировать
      </button>
      <div className="data-container">
        {fields.map((item) => {
          const { name, value, func } = item;
          console.log(item);
          return (
            <div key={name}>
              <div className="data-title">{name}</div>

              {name.toLowerCase() === 'comment' ? (
                <input
                  readOnly={isNonEditable}
                  className="data-input comment"
                  type="text"
                  value={value.toString()}
                  onChange={func}
                ></input>
              ) : (
                <input
                  readOnly={isNonEditable}
                  className="data-input"
                  type="text"
                  value={value.toString()}
                  onChange={func}
                  required
                ></input>
              )}
            </div>
          );
        })}
      </div>
      <button
        disabled={isNonEditable}
        className={isNonEditable ? 'send-button' : 'send-button active'}
        onClick={() => console.log('click')}
      >
        Отправить
      </button>
    </div>
  );
};

export default UserProfile;
