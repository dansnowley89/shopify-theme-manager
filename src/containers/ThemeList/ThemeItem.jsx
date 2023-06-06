import React, { Component } from 'react';

class ThemeItem extends Component {
  render() {

    console.log('this.props.itemData');
    console.log(this.props.itemData);


    return (
      <li> Theme item from 'thmeitem' component.</li>
    );
  }
}

export default ThemeItem;
