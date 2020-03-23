import React from 'react'
import { create } from 'react-test-renderer'

import ActionButton from './../ActionButton'

describe("[RENDER] ActionButton – Snapshot test", () => {
    test("Matches the snapshot", () => {
        const button = create(<ActionButton label="Action Button" action={()=>{}}/>)
        expect(button.toJSON()).toMatchSnapshot()
    })
})