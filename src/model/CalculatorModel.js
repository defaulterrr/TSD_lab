const calculatorModel = (action, num1, num2) => {
    const Num1 = Number(num1)
    const Num2 = Number(num2)

    if (action === "+") {
        return Num1 + Num2
    } else if (action === "-") {
        return Num1 - Num2
    } else if (action === "/") {
        return Num1/Num2
    } else if (action === "*") {
        return Num1*Num2
    }

    return undefined
}

export default calculatorModel