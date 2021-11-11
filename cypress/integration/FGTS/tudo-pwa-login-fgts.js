/// <reference types="cypress" />
    

describe("Tela de Login - Login Success", () => {
    beforeEach(() => cy.visit("https://web.homolog.meutudo.app/intro"))

    it("Successfully Login", () => {
        cy.contains('Entrar').click()
        cy.get('.input___11dPn').type('18361234004')
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type('123124')
        //cy.contains('Entrar').click();
    })


it("Register Botton 1", () => { // Validar se o botão de cadastrar na tela de login está direcionando para a tela de cadastro.
        cy.contains('Entrar').click()
        cy.contains('Cadastrar').click()
        cy.contains('Você é').should('be.visible')
        //Depois daqui segue fluxo de cadastro normal
    })


    it("Register Botton 2", () => { // Validar se o botão de cadastrar na tela de login está direcionando para a tela de cadastro.
        cy.contains('Entrar').click()
        cy.get('.input___11dPn').type('18361234004')
        cy.contains('Cadastrar').click()
        cy.contains('Você é').should('be.visible')
        //Depois daqui segue fluxo de cadastro normal
    })
}) 