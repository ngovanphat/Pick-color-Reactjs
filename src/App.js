import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App  extends Component {
  render(){
  return (
    <div className="App">
     <div className="row m-1">
       <div className="col-6">
        <ColorPicker />
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
        <Result />
      </div>
    </div>
    </div>
  );
}
}

export default App;
