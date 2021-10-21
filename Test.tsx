import React = require('react');
import Child from './Child';

export default (props) => {
  const onFormSubmit = (name, email) => {
    console.log('TEST -> ', name, email);
  };

  return (
    <div>
      <p>In TEST</p>
      <Child name={name} onFormSubmit={onFormSubmit} />
    </div>
  );
};
