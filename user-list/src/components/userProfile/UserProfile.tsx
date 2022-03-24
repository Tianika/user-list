import React, { useState } from 'react';
import { User } from '../userList/types';
import './userProfile.scss';

const UserProfile = (props: { userData: User | null }) => {
  const { userData } = props;

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
  const [warning, setWarning] = useState(false);

  const fields = [
    {
      name: 'Name',
      value: [name],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      },
    },
    {
      name: 'User name',
      value: [username],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      },
    },
    {
      name: 'E-mail',
      value: [email],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      },
    },
    {
      name: 'Street',
      value: [street],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(event.target.value);
      },
    },
    {
      name: 'City',
      value: [city],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
      },
    },
    {
      name: 'Zip code',
      value: [zipcode],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipcode(event.target.value);
      },
    },
    {
      name: 'Phone',
      value: [phone],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
      },
    },
    {
      name: 'Website',
      value: [website],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setWebsite(event.target.value);
      },
    },
    {
      name: 'Comment',
      value: [comment],
      func: (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
      },
    },
  ];

  const enableEditing = () => {
    setIsNonEditable(false);
  };

  const sendUserData = () => {
    if (
      name &&
      username &&
      email &&
      street &&
      city &&
      zipcode &&
      phone &&
      website
    ) {
      setWarning(false);
      console.log(`
    Name: ${name}
    User name: ${username}
    E-mail: ${email}
    Street: ${street}
    City: ${city}
    Zip code: ${zipcode}
    Phone: ${phone}
    Website: ${website}
    Comment: ${comment}
    `);
    } else {
      setWarning(true);
    }
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
        <div className={!warning ? 'warning' : 'warning active'}>
          Перед отправкой заполните все отмеченные поля
        </div>
      </div>
      <button
        disabled={isNonEditable}
        className={isNonEditable ? 'send-button' : 'send-button active'}
        onClick={sendUserData}
      >
        Отправить
      </button>
    </div>
  );
};

export default UserProfile;
