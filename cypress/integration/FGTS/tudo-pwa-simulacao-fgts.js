/// <reference types="cypress" />

describe("Simulation", () => {
    beforeEach(() => cy.visit("https://web.homolog.meutudo.app/intro"));


    it("Simulation with Full Value", () => {
        cy.contains('Entrar').click();
        cy.get('.input___11dPn').type('54491576068');
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type('123124')
        cy.wait(3000)
        cy.get('#onesignal-slidedown-cancel-button').click();
        cy.get('.container___2HdHw').click()
        cy.contains('Continuar').click();
        cy.contains('Aceitar').click();
        cy.get('.info_container___1gRi0 > :nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type('60320295')
        cy.contains('Continuar').click()
        cy.get(':nth-child(6) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
        cy.wait(3000)
        cy.get('.action_container___23yhu > :nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
        cy.get('.centerButton___2un67 > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
    })
})