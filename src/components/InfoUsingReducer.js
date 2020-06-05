import React, { useReducer } from 'react';
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const InfoUsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''});
  const onChange = (e) => {
    dispatch(e.target);
  }
  const {name, nickname} = state;
  return (
    <div>
      <input name='name' value={name} onChange={onChange} />
      <input name='nickname' value={nickname} onChange={onChange} />
      <p>NAME : {name}</p>
      <p>NICKNAMe : {nickname}</p>
    </div>
  );
};

export default InfoUsingReducer;