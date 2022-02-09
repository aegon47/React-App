import React, { Component } from 'react';
import Todocard from './todocard';

class Cards extends Component {
    state = {
        value:[1,2,3,4],
        text:''
      } 


    onChangeText = (e) =>{
        this.setState({text:e.target.value})
        console.log(this.state.value);

    }

    handleSubmit = () => {
        const value = [...this.state.value, this.state.text];
        this.setState({value})
        this.setState({text :''})
    }

    totalSum = () => {
        let sum = 0;
        for (let i = 0; i < this.state.value.length; i++) {
            //sum += this.state.value[i];
            //this gives 10 + 2 = 102
            
            //but use parseInt to make sure its adding numbers not concatinating strings
            sum += parseInt(this.state.value[i]);

        }
        return sum;
    }

    render() { 
        return (
        <React.Fragment>
            <h3>sum is {this.totalSum()}</h3>
            <input type={'number'} value = {this.state.text} onChange = {this.onChangeText}/>
            <button onClick={this.handleSubmit}>hello</button>
            {this.state.value.map(v=><Todocard value = {v}/>)}

        </React.Fragment>
        
        );
    }
}
 
export default Cards;