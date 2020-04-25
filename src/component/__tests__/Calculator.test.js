import React from 'react'
import { create } from 'react-test-renderer'

import Calculator from './../Calculator'

// Still makes sense to see if this Component actually renderable
describe("[RENDER] Calculator – Snapshot test", ()=> {
    test("Matches the snapshot", ()=>{
        const calculator = create(<Calculator/>)
        expect(calculator.toJSON()).toMatchSnapshot()
    })
})