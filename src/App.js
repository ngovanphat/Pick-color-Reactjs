import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App  extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
    this.onSetColor = this.onSetColor.bind(this);
  }

  onSetColor(params){
    this.setState({
      color : params
    });
  }

  render()
  {
      return (
        <div className="App">
          <div className="row m-1">
            <div className="col-6">
              <ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor } />
            </div>
            <div className="col-6">
            <SizeSetting />
            </div>
          </div>
          <div className="row mb-1 justify-content-center">
            <Reset />
          </div>
          <div  className="row m-1">
          <div className="col-12">
            <Result color={this.state.color} />
          </div>
        </div>
        </div>
      );
  }
}

export default App;
