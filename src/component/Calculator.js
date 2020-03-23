import React from 'react'
import ValueBox from './ValueBox/ValueBox'
import ActionButton from './ActionButton/ActionButton'
import calculatorModel from './../model/CalculatorModel'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstValue:     0,
            secondValue:    0,
            result:         0,
        }
        this.onPress = this.onPress.bind(this)
        
    }

    onPress = (label) => {
        const num1 = Number(document.getElementById("num_1").value)
        const num2 = Number(document.getElementById("num_2").value)
        this.setState({
            result:     calculatorModel(label,num1,num2)
        }) 
    }  
    
    render() {
        return (
            <div className="Calculator">
                <ValueBox label=" First Value: " id="num_1" value={this.state.firstValue}></ValueBox>
                <ValueBox label="Second Value: " id="num_2" value={this.state.secondValue}></ValueBox>
                <ActionButton label="+" action={this.onPress}></ActionButton>
                <ActionButton label="-" action={this.onPress}></ActionButton>
                <ActionButton label="/" action={this.onPress}></ActionButton>
                <ActionButton label="*" action={this.onPress}></ActionButton>
        <h1>Answer: {this.state.result}</h1>
            </div>
        )
    }
}

export default Calculator;