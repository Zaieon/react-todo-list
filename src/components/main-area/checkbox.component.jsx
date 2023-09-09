import React, { Component } from 'react';
import './checkbox.style.scss'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false, // Initial checkbox state
    };
  }

  // Function to handle checkbox change
  handleCheckboxChange = () => {
    this.setState({ isChecked: !this.state.isChecked }, () => {
      // You can also perform some action when the checkbox state changes
      // For example, you can call a function passed as a prop to this component
      if (this.props.onCheckboxChange) {
        this.props.onCheckboxChange(this.state.isChecked);
      }
    });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleCheckboxChange}
        />
        {/* <label>{this.props.label}</label> */}
      </div>
    );
  }
}

export default ListItem;