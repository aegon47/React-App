import React, { Component } from 'react';


class Todocard extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>
                    {this.props.value}
                </h1>

            </React.Fragment>
        );
    }
}
 
export default Todocard;

