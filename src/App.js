import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="row m-1">
       <div className="col-6">
         <div className="jumbotron jumbotron-fluid">
           <div className="container">
             <h1 className="display-3">Color Picker</h1>
             <p className="lead">Choose one option</p>
           </div>
         </div>
       </div>
       <div className="col-6">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Size picker</h1>
            <p className="lead">Choose Size</p>
            <p className="display-6">Size: 5</p>
            <button type="button" className="btn  bg-light m-1">Increase</button>
            <button type="button" className="btn  bg-light m-1">Decrease</button>
          </div>
        </div>
       </div>
     </div>
     <div className="row mb-1 justify-content-center">
     <button type="button" className="btn bg-primary w-25">Reset</button>
     </div>
    <div  className Name="row m-1">
      <div className="col-12">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Result</h1>
            <p className="lead">Color:  Red - FontSize: 15px</p>
            <hr className="my-2"/>
            <p className="border border-primary p-2">Content setting</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
