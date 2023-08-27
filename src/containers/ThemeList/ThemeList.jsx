import React, { Component } from 'react';
import ThemeItem from '../../containers/ThemeList/ThemeItem';

class ThemeList extends Component {

  constructor(props) {
    super(props);
    this.clearItem = this.clearItem.bind(this);
  }

  state = {
    name: 'dev',
    themes: []
  };

  getStoredThemes() {
    chrome.storage.local.get(["themes"]).then((result) => {
      let themes = [];

      if (Object.keys(result).length > 0) {
        themes = [...result.themes];
      }

      this.setState({
        name: 'new name!',
        themes: themes
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
  }

  clearItem(arrayKey) {
    chrome.storage.local.get(["themes"], function (items) {
      items.themes.splice(arrayKey, 1);
      chrome.storage.local.set(items);
    });
  }

  componentDidMount() {
    this.getStoredThemes();

    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.getStoredThemes();
    });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.themes.length}</h1> Number of themes captured */}
        <ul className="divide-y divide-gray-100">
          {this.state.themes.length > 0 && this.state.themes.map((itemData, i) => <ThemeItem key={i} keyNo={i} itemData={itemData} clearItem={this.clearItem} />)}
        </ul>

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mt-4" onClick={this.clearStorage}>Clear Storage</button>
      </div>
    );
  }
}

export default ThemeList;
