/// <reference types="cypress" />
    

describe("Tela de Login - Password functions", () => {
    beforeEach(() => cy.visit("https://web.homolog.meutudo.app/intro"))

     it("Wrong Password", () => { // Login com senha errada - Garantir que apareça a mensagem de login e/ou senha incorreta.
        cy.get(':nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
        cy.get('.input___11dPn').type('54491576068');
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type('123123')
        cy.contains('incorretos').should('be.visible')
    })


    it("Empty Password", () => { // Login com senha em branco - Garantir que apareça a mensagem de login e/ou senha incorreta.
        cy.contains('Entrar').click()
        cy.get('.input___11dPn').type('18361234004')
        cy.get(':nth-child(4) > .false > .button_container___Tboql').click()
        cy.contains('obrigatório').should('be.visible')
    })

    it("Forgout Password", () => { // Clicar no botão de recuperação da senha e validar se envio Token.
        cy.contains('Entrar').click()
        cy.get('.input___11dPn').type('18361234004')
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').click()
        cy.get(':nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql').click()
        cy.contains('validação').should('be.visible')
    })
})