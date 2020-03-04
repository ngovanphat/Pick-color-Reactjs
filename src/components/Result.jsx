import React, { Component } from 'react';


class Result  extends Component {

    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color
        };
    }
    render(){
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Result</h1>
                    <p className="lead">Color:  Red - FontSize: 15px</p>
                    <hr className="my-2"/>
                    <p className="p-2 content" style={this.setStyle()}>Content setting</p>
                </div>
            </div>
            );
        }
}

export default Result;
