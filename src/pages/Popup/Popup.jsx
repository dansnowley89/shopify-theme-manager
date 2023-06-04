import React from 'react';
// import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {

  chrome.storage.local.get(["links"]).then((result) => {
    console.log(result);
    console.log("Value currently is " + result.links);
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a> */}
        <h1>Recent Theme Activity</h1>
        <p>Here lies a list of recent themes that have been used.</p>
        <ul>
          <li>Instant 1
            <ul>
              <li>Preview</li>
              <li>Customiser</li>
            </ul>
          </li>
          <li>Instant 2
            <ul>
              <li>Preview</li>
              <li>Customiser</li>
            </ul>
          </li>
          <li>Instant 3
            <ul>
              <li>Preview</li>
              <li>Customiser</li>
            </ul>
          </li>
          <li>Instant 4
            <ul>
              <li>Preview</li>
              <li>Customiser</li>
            </ul>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Popup;
