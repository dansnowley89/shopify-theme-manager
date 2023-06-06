import React, { Component, Fragment } from 'react';

class ThemeItem extends Component {
  render() {
    return (
      <Fragment>
        <li>Theme:</li>
        <ul>
          <li> Preview Link: <a href={this.props.itemData.previewLink}>{this.props.itemData.previewLink}</a></li>
          <li> Customiser Link: <a href={this.props.itemData.customiserLink}>{this.props.itemData.customiserLink}</a></li>
        </ul>
      </Fragment>
    )
  }
}

export default ThemeItem;
