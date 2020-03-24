describe('Calculates the right way',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Properly calculates 3+2',()=>{
        cy.get(".inputValue").eq(0).clear().type("2")
        cy.get(".inputValue").eq(1).clear().type("3")
        cy.get(".button").eq(0).click()
        // cy.get("h1").should('have.value','5')
       cy.get('h1').should('have.text','Answer: 5')
    })

    it('Properly calculates 5-6',()=>{
        cy.get(".inputValue").eq(0).clear().type("5")
        cy.get(".inputValue").eq(1).clear().type("6")
        cy.get(".button").eq(1).click()
        // cy.get("h1").should('have.value','5')
       cy.get('h1').should('have.text','Answer: -1')
    })

    it('Properly calculates 1/2',()=>{
        cy.get(".inputValue").eq(0).clear().type("1")
        cy.get(".inputValue").eq(1).clear().type("2")
        cy.get(".button").eq(2).click()
        // cy.get("h1").should('have.value','5')
       cy.get('h1').should('have.text','Answer: 0.5')
    })

    it('Properly calculates 5*6',()=>{
        cy.get(".inputValue").eq(0).clear().type("5")
        cy.get(".inputValue").eq(1).clear().type("6")
        cy.get(".button").eq(3).click()
        // cy.get("h1").should('have.value','5')
       cy.get('h1').should('have.text','Answer: 30')
    })
})