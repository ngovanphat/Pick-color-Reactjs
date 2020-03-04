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
      fontSize: 16
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  onSetColor(params){
    this.setState({
      color : params
    });
  }

  onChangeSize(value){
    if(this.state.fontSize+value>=8 && this.state.fontSize+value<=36){
      this.setState({
        fontSize: this.state.fontSize+value
      });
    }
  }

  onSettingDefault(value){
    console.log(value);
    if(value){
      this.setState({
        color: 'red',
        fontSize:12 
      });
    }
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
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
            </div>
          </div>
          <div className="row mb-1 justify-content-center">
            <Reset onSettingDefault={this.onSettingDefault}/>
          </div>
          <div  className="row m-1">
          <div className="col-12">
            <Result color={this.state.color} fontSize={this.state.fontSize}/>
          </div>
        </div>
        </div>
      );
  }
}

export default App;
