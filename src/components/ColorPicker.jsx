import React, { Component } from 'react';

class ColorPicker  extends Component {

    constructor(props){
        super(props);
    }


  render(){
    return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Color Picker</h1>
                <p className="lead">Choose one option</p>
                <span></span>
            </div>
            </div>
    );
    }
}

export default ColorPicker;
