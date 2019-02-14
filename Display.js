import React, {Component} from 'react';
import './App.css';
class Display extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="abc">
                <div>This is {this.props.name} and my age is {this.props.age}</div>
                </div>
        );
    }
}

export default Display;