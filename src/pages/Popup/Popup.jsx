import React from 'react';

import ThemeList from '../../containers/ThemeList/ThemeList';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App p-4">
      <header className="h3">
        <h1 className="text-lg">Theme Activity</h1>
        <a href="https://admin.shopify.com" target="_blank" rel="noreferrer">Select Store &gt; </a>
      </header>
      <ThemeList />
    </div>
  );
};

export default Popup;
