import React, { Component } from 'react';
import Todocard from './todocard';

class Cards extends Component {
    state = {
        value:[],
        text:''
        
    } 


    getLocalItems = () =>{
        let lst = localStorage.getItem('lists');
        if(lst){
            return JSON.parse(localStorage.getItem('lists'));
        }
        else{
            return [];
        }
    }

    onChangeText = (e) =>{
        this.setState({text:e.target.value})
        console.log(this.state.value);

    }

    handleSubmit = () => {
        //this.state.value.setState({value:this.getLocalItems()})
        const value = [...this.getLocalItems(), this.state.text];
        localStorage.setItem('lists', JSON.stringify(value));
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
            {this.getLocalItems().map(v=><Todocard value = {v}/>)}

        </React.Fragment>
        
        );
    }
}
 
export default Cards;