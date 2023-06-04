import React, { Component } from 'react';
import ThemeItem from '../../containers/ThemeList/ThemeItem';

class ThemeList extends Component {

  state = {
    name: 'dev',
  };

  getStoredLinks() {
    chrome.storage.local.get(["links"]).then((result) => {
      console.log(result);
      console.log("Value currently is " + result.links);

      this.setState({
        name: 'new name!'
      });
    });
  }

  clearStorage() {
    chrome.storage.local.clear(function () {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
      // do something more
    });
    chrome.storage.sync.clear(); // callback is optional
  }

  componentDidMount() {
    this.getStoredLinks();
  }

  componentDidUpdate() {
    console.log('did update');
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <ThemeItem />
        </ul>

        <button onClick={this.clearStorage}>Clear Storage</button>
      </div>
    );
  }
}

export default ThemeList;
