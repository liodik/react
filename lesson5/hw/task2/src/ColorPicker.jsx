import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      titleText: 'Color',
    };
  }
  setPickerTitle = colorName => {
    this.setState({ titleText: colorName });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.titleText}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onClick={() => this.setPickerTitle('Coral')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onClick={() => this.setPickerTitle('Aqua')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onClick={() => this.setPickerTitle('Bisque')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
