import React from 'react'
import ValueBox from './ValueBox/ValueBox'
import ActionButton from './ActionButton/ActionButton'

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
        const first = Number(document.getElementById("first").value)
        const second = Number(document.getElementById("second").value)

        if (label === "+") {
            this.setState( {
                result:     first+second
            })
        } else if (label === "-") {
            this.setState( {
                result:     first-second
            })
        } else if (label === "/") {
            this.setState( {
                result:     first/second
            })
        } else if (label === "*") {
            this.setState( {
                result:     first*second
            })
        }
    }  
    
    render() {
        return (
            <div className="Calculator">
                <ValueBox label=" First Value: " id="first" value={this.state.firstValue}></ValueBox>
                <ValueBox label="Second Value: " id="second" value={this.state.secondValue}></ValueBox>
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