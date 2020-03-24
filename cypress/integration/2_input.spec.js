describe('Accepts input',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it("Allows for input - ValueBox input 1",()=>{
        const input = '123'
        cy.get(".inputValue:first").type(input).should("have.value",0+input)
    })

    it("Allows for input - ValueBox input 2",()=>{
        const input = '123'
        cy.get(".inputValue").eq(1).type(input).should("have.value",0+input)
    })
})