describe('Accepts input',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it("Allows for input",()=>{
        const input = '123'
        cy.get(".inputValue:first").type(input).should("have.value",0+input)
    })
})