import React from 'react';

import ThemeList from '../../containers/ThemeList/ThemeList';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App p-4">
      <header className="h3">
        <h1 className="text-lg">Recent Theme Activity</h1>
      </header>
      <ThemeList />
    </div>
  );
};

export default Popup;
