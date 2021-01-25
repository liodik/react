import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      titleText: '',
    };
  }
  setPickerTitle = colorName => {
    this.setState({ titleText: colorName });
  };
  clearPickerTitle = () => {
    this.setState({ titleText: '' });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.titleText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setPickerTitle('Coral')}
            onMouseLeave={() => this.clearPickerTitle()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setPickerTitle('Aqua')}
            onMouseLeave={() => this.clearPickerTitle()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setPickerTitle('Bisque')}
            onMouseLeave={() => this.clearPickerTitle()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
