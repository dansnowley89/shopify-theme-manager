import React, { Component } from 'react';
import ThemeItem from '../../containers/ThemeList/ThemeItem';

class ThemeList extends Component {

  state = {
    name: 'dev',
    themes: []
  };

  getStoredThemes() {
    chrome.storage.local.get(["themes"]).then((result) => {
      console.log(result);
      console.log("Value currently is " + result.themes);

      console.log('getStoredthemes');
      console.log([...result.themes]);

      this.setState({
        name: 'new name!',
        themes: [...result.themes]
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
    this.getStoredThemes();
    console.log('this.state')
    console.log(this.state)

    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.getStoredThemes();
    });
  }

  render() {

    console.log('here')
    console.log(this.state.themes)
    return (
      <div>
        <h1>{this.state.name} - {this.state.themes.length}</h1>
        <ul>
          {this.state.themes.length > 0 && this.state.themes.map((itemData, i) => <ThemeItem key={i} itemData={itemData} />)}
        </ul>

        <button onClick={this.clearStorage}>Clear Storage</button>
      </div>
    );
  }
}

export default ThemeList;
