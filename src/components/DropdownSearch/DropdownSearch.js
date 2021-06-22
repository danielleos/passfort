import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// not sure if the task allowed this
// I just didn't want to reinvent the wheel...
import { Dropdown } from 'semantic-ui-react'

import './DropdownSearch.css'

export default class DropdownSearch extends PureComponent {
  // these props can be extended to include options for the props specified in the semantic-ui package
  // to extend this, it could also include custom props to specify different styling in the CSS file
  static propTypes = {
    // options for dropdown
    options: PropTypes.array,
    // header text before choice selection
    headerText: PropTypes.string,
    // placeholder text before choice selection
    placeholderText: PropTypes.string,
    // canSearch by typing
    canSearch: PropTypes.bool,
    // canScroll for lots of options
    canScroll: PropTypes.bool,
  }

  render() {
    return (
      <div class='dropdownsearch-container'>
        <div class='dropdownsearch-header'>
          {this.props.headerText}
        </div>
        {/* simple version */}
        <Dropdown
          placeholder={this.props.placeholderText}
          fluid
          floating
          selection
          search={this.props.canSearch}
          scrolling={this.props.canScroll}
          options={this.props.options}
          icon='sort'
        />
      </div>
    )
  }
}