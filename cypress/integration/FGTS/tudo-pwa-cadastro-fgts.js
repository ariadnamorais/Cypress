/// <reference types="cypress" />

describe("Cadastro FGTS", () => {
    beforeEach(() => cy.visit("https://web.homolog.meutudo.app/"));

    it("Successfully Person IDs", () => {
        cy.get('#fgts').click();
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Garcez");
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554");
        cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("teste@a.com.br");
        cy.contains('Aceitar').click();
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("597.355.060-50");
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("11051988");
        cy.contains('Continuar').click();
    });

    it("Validadion Persons Filds", () => {
        cy.get('#fgts').click();
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leo");
        cy.contains('Digite').should('be.visible');
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("  ");
        cy.contains('obrigatório').should('be.visible');
        cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type('abc');
        cy.contains('inválido').should('be.visible');
    });

    it("Validation CPF Filds", () => {
        cy.get('#fgts').click();
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Garcez");
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554");
        cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("teste@a.com.br");
        cy.contains('Aceitar').click();
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("  ");
        cy.contains('obrigatório').should('be.visible');
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("99999999999");
        cy.contains('inválido').should('be.visible');
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("  ");
        cy.contains('obrigatório').should('be.visible');
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("01010101");
        cy.contains('inválido').should('be.visible');
    })

    it("Terms and Policy", () => {
        cy.get('#fgts').click();
        cy.contains('Termos').click();
        cy.go('back');
        cy.contains('Política').click();
        cy.go('back');
    })
});