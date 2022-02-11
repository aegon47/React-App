import React, { Component } from 'react';
import '../styles/todocard.css'


class Todocard extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                    <div className='container'>
                    {this.props.value}
                    </div>


            </React.Fragment>
        );
    }
}
 
export default Todocard;

