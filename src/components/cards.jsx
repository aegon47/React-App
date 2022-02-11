import React, { Component } from 'react';
import Todocard from './todocard';
import '../styles/cards.css'

class Cards extends Component {
    state = {
        value:[],
        text:'',
        ipnutText:''
        
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
        //for local storage we use this function to return array from stored json 
        if(this.state.text.length!==0){
            const value = [...this.getLocalItems(), this.state.text];
            localStorage.setItem('lists', JSON.stringify(value));
            this.setState({value})
            this.setState({text :''})
        }
        else{
            {alert("enter a number numpty")}
        }
    }
    totalSum = () => {
        let sum = 0;
        
        for (let i = 0; i < this.getLocalItems().length; i++) {
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
            {/* <input type={'text'} value = {this.state.inputText} onChange = {(e)=>this.setState({text:e.target.value})}/> */}

            <button onClick={this.handleSubmit} className='ButtonClick'>hello</button>

            {this.getLocalItems().map(v=><Todocard value = {v}/>)}


        </React.Fragment>
        
        );
    }
}
 
export default Cards;