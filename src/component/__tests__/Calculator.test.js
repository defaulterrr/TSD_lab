import React, { createElement } from 'react'
import { create } from 'react-test-renderer'

import Calculator from './../Calculator'

// Still makes sense to see if this Component actually renderable
describe("[RENDER] Calculator – Snapshot test", ()=> {
    test("Matches the snapshot", ()=>{
        const calculator = create(<Calculator/>)
        expect(calculator.toJSON()).toMatchSnapshot()
    })
})

// Now to some end-to-end testing

describe("[FUNCTIONAL] Calculator – a+b",()=>{
    test("It shows the expected result",()=>{
        const component = create(<Calculator/>)
        const instance = component.root
        const buttons = instance.findAllByType("button")
        const plusButton = buttons[0]
        component.props.setState({
               firstValue:  2,
               secondValue: 3    
            }
        )
        plusButton.props.onClick()
    })
})