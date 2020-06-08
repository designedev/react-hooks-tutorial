import React from 'react';
import useInputs from './useInput';

const InfoUsingCustomHook = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });

  const {name, nickname} = state;

  return (
    <div>
        <div>
          <input name="name" value={name} onChange={onChange} />
          <input name="nickname" value={nickname} onChange={onChange} />
        </div>
        <div>
          <p>NAME : {name}</p>
          <p>NICKNAME : {nickname}</p>
        </div>
      </div>
  );
};

export default InfoUsingCustomHook;