import React, { Component } from 'react';

class ThemeItem extends Component {

  state = {
    name: 'dev',
  };

  render() {
    return (
      <li> Theme item from 'thmeitem' component.</li>
    );
  }
}

export default ThemeItem;
