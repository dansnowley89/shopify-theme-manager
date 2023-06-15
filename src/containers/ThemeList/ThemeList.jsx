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

    chrome.storage.onChanged.addListener((changes, namespace) => {
      this.getStoredThemes();
    });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.themes.length}</h1> Number of themes captured */}
        <ul className="divide-y divide-gray-100">
          {this.state.themes.length > 0 && this.state.themes.map((itemData, i) => <ThemeItem key={i} itemData={itemData} />)}
        </ul>

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mt-4" onClick={this.clearStorage}>Clear Storage</button>
      </div>
    );
  }
}

export default ThemeList;
