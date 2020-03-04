import React, { Component } from 'react';


class SizeSetting  extends Component {

  changeSize(size){
      this.props.onChangeSize(size);
  }  
  render(){
        return (  
                <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Size picker</h1>
                    <p className="lead">Choose Size</p>
                    <p className="display-6">Size: {this.props.fontSize}</p>
                    <button type="button" className="btn  bg-danger m-1" onClick={()=>this.changeSize(2)}>Increase</button>
                    <button type="button" className="btn  bg-primary m-1" onClick={()=>this.changeSize(-2)}>Decrease</button>
                </div>
                </div>
           
            
        );
       }
}

export default SizeSetting;
