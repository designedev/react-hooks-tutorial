import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickame = (e) => {
    setNickname(e.target.value);
  }
  return (
    <div>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickame} />
        </div>
        <div>
          <p>NAME : {name}</p>
          <p>NICKNAME : {nickname}</p>
        </div>
      </div>
  );
};

export default Info;