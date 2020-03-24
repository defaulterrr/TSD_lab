import calculatorModel from './../CalculatorModel'

describe("[Functional] Calculator Model - check for correct execution",()=>{
    test("Test a+b",()=>{
        expect(calculatorModel("+","3","5")).toBe(8)
    })

    test("Test a-b",()=>{
        expect(calculatorModel("-","3","5")).toBe(-2)
    })

    test("Test a/b",()=>{
        expect(calculatorModel("/","3","5")).toBe(0.6)
    })

    test("Test a*b",()=>{
        expect(calculatorModel("*","3","5")).toBe(15)
    })
})