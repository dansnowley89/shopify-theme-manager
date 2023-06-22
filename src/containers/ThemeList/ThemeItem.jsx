import React, { Component, Fragment } from 'react';

class ThemeItem extends Component {
  render() {
    return (
      <Fragment>

        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex gap-x-4 w-full">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">{this.props.itemData.storeDomain}</p>
              <p class="text font-semibold leading-6 text-gray-900">Theme:{this.props.itemData.themeHeading}</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                <a target="_blank" href={this.props.itemData.previewLink} rel="noreferrer">Preview</a>&nbsp;|&nbsp;
                <a target="_blank" href={this.props.itemData.customiserLink} rel="noreferrer">Customiser</a>
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              </p>
            </div>
          </div>
        </li>
      </Fragment>
    )
  }
}

export default ThemeItem;
