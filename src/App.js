import React from 'react';
import Profile from './Profile/profile';
 import img from './img.jpg'
const App = (props) => {
  return (
    <div>
      <img src={img} alt="img"></img>
      <Profile FullName="Mohammed Khammassi" Age="40" professionl="Help Desk"/>
    </div>
  );
}

export default App;
 