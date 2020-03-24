describe("Cypress",()=>{
    it("It's working",()=>{
        expect(true).to.equal(true)
    })

    it("App is accessible",()=>{
        cy.visit('/')
    })
})