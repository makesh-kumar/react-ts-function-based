import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Child from './Child';
import Test from './Test';

import './style.css';

const App = (props) => {
  const [name, changeName] = useState(null);
  const [email, changeEmail] = useState(null);

  const onFormSubmit = (name, email) => {
    changeName(name);
    changeEmail(email);
  };

  return (
    <div>
      <p>Parent Component</p>
      Name :-{name}
      <br />
      Email :- {email}
      <hr />
      <p>Child Component</p>
      <Child name={name} onFormSubmit={onFormSubmit} />
      <hr />
      <p>TEST Component</p>
      <Test name={name} onFormSubmit={onFormSubmit} />
    </div>
  );
};
// class App extends Component<AppProps, AppState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

render(<App ok="ss" />, document.getElementById('root'));
