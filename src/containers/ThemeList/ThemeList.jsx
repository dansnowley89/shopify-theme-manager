import React, { Component } from 'react';
import ThemeItem from '../../containers/ThemeList/ThemeItem';

class ThemeList extends Component {

  state = {
    name: 'dev',
    links: []
  };

  getStoredLinks() {
    chrome.storage.local.get(["links"]).then((result) => {
      console.log(result);
      console.log("Value currently is " + result.links);

      console.log('getStoredLinks');
      console.log([...result.links]);

      this.setState({
        name: 'new name!',
        links: [...result.links]
      });
    });
  }

  clearStorage() {
    chrome.storage.local.clear(function () {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
    });
    chrome.storage.sync.clear(); // callback is optional
  }

  componentDidMount() {
    this.getStoredLinks();
    console.log('this.state')
    console.log(this.state)

    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.getStoredLinks();
    });
  }

  render() {

    console.log('here')
    console.log(this.state.links)
    return (
      <div>
        <h1>{this.state.name} - {this.state.links.length}</h1>
        <ul>
          {this.state.links.length > 0 && this.state.links.map((x, i) => <ThemeItem key={i} />)}
        </ul>

        <button onClick={this.clearStorage}>Clear Storage</button>
      </div>
    );
  }
}

export default ThemeList;
