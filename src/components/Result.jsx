import React, { Component } from 'react';


class Result  extends Component {
  render(){
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Result</h1>
                <p className="lead">Color:  Red - FontSize: 15px</p>
                <hr className="my-2"/>
                <p className="border border-primary p-2">Content setting</p>
            </div>
        </div>
        );
    }
}

export default Result;
