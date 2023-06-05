import React from 'react';
// import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';

import ThemeList from '../../containers/ThemeList/ThemeList';

import './Popup.css';

const Popup = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recent Theme Activity</h1>
      </header>
      <ThemeList />
    </div>
  );
};

export default Popup;
