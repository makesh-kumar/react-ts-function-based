import React, { useEffect, useState } from 'react';

export default (props) => {
  // console.log(props)

  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');

  useEffect(() => {
    props.onFormSubmit(name, email);
  });

  const formSubmit = () => {
    // props.onFormSubmit(name, email);
  };

  const onNameChange = (event) => {
    changeName(event.target.value);
  };

  const onEmailChange = (event) => {
    changeEmail(event.target.value);
  };
  return (
    <div>
      <label>User Name : </label>
      <input onChange={onNameChange} />
      <br /> <br />
      <label>Email : </label>
      <input onChange={onEmailChange} value={email} />
      <br />
      <button onClick={formSubmit}>Submit</button>
    </div>
  );
};
