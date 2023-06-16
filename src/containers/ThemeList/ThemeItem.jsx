import React, { Component, Fragment } from 'react';

class ThemeItem extends Component {
  render() {
    return (
      <Fragment>

        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex gap-x-4">

            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">Theme Name</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                Preview Link: <a href={this.props.itemData.previewLink}>{this.props.itemData.previewLink}</a>
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                {/* Customiser Link: <a href={this.props.itemData.customiserLink}>{this.props.itemData.customiserLink}</a> */}
              </p>
            </div>
            {/* <li>Theme:</li>
            <ul>
              <li> Preview Link: <a href={this.props.itemData.previewLink}>{this.props.itemData.previewLink}</a></li>
              <li> Customiser Link: <a href={this.props.itemData.customiserLink}>{this.props.itemData.customiserLink}</a></li>
            </ul> */}
          </div>
        </li>
      </Fragment>
    )
  }
}

export default ThemeItem;
