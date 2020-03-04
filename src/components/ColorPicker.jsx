import React, { Component } from 'react';

class ColorPicker  extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors: ['red','green','blue','#ccc','black']
        };
    }

    showColor(color){
        console.log(this.props.color);
        return {
            backgroundColor: color
        };
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

  render(){
      const elmColors = this.state.colors.map((color,index)=>{
        return <span 
                key={index}
                style={ this.showColor(color) }
                className={ this.props.color === color ? 'active' : ''} 
                onClick = {()=>this.setActiveColor(color)}
                ></span>
      });
    return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Color Picker</h1>
                <p className="lead">Choose one option</p>
                {elmColors }
            </div>
            </div>
    );
    }
}

export default ColorPicker;
