import React from 'react'
import ValueBox from './ValueBox'
import ActionButton from './ActionButton'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstValue:     0,
            secondValue:    0,
            result:         0,
        }
        this.onPress = this.onPress.bind(this)
        //const state_valueOne = {firstValue: this.state.firstValue, id: "first"}
    }

    onPress = () => {
        // this.state.firstValue = 
        const first = Number(document.getElementById("first").value)
        // alert(first)
        const second = Number(document.getElementById("second").value)

        this.setState( {
            firstValue: first,
            secondValue: second,
            result:     first+second
        })
    }  
    
    

    // onChange = () => {
    //     this.setState({value: event.target.value})
    // }



    render() {
        return (
            <div className="Calculator">
                <ValueBox label=" First Value: " id="first" value={this.state.firstValue}></ValueBox>
                <ValueBox label="Second Value: " id="second" value={this.state.secondValue}></ValueBox>

                <ActionButton label="+" action={this.onPress}></ActionButton>
        <h1>Answer: {this.state.result}</h1>
            </div>
        )
    }
}

export default Calculator;