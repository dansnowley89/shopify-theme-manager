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
        name: 'new name!',
        links: result.links
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
    console.log('this.state')
    console.log(this.state)

    // TODO update state with local storage
    chrome.storage.onChanged.addListener((changes, namespace) => {
      console.log('storage listener');
      this.getStoredLinks();
    });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.name}</h1> */}
        <ul>
          {this.state.links && this.state.links.map((x, i) => <ThemeItem key={i} />)}
        </ul>

        <button onClick={this.clearStorage}>Clear Storage</button>
      </div>
    );
  }
}

export default ThemeList;
