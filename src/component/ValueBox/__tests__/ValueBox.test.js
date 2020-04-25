import React from 'react'
import { create } from 'react-test-renderer'

import ValueBox from './../ValueBox'

describe("[RENDER] ValueBox – Snapshot test", ()=> {
    test("Matches the snapshot", () => {
        const valuebox = create(<ValueBox label="ValueBox" id="valuebox" value="0"/>)
        expect(valuebox.toJSON()).toMatchSnapshot()
    })
})