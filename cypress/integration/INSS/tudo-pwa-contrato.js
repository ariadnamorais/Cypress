/// <reference types="cypress" />


describe('Acesso App Web', () => {
    it('successfully loads', () => {
      cy.visit('https://web.homolog.meutudo.app/intro')
      cy.contains('Entrar').click()
      cy.get('.input___11dPn').type("034.383.093-00")
      cy.contains('Entrar').click()
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("123124")
      cy.wait(7000) // Tempo de espera para tela carregar
      cy.get('#onesignal-slidedown-allow-button').click()
      cy.wait(7000) // Tempo de espera para tela carregar
      cy.get(':nth-child(2) > .shadowBox___3MvRy > .outside_container___21nRy > .touchable_container___tPxA5 > [role="presentation"] > .container___2HdHw > .container___3g-7G > .value___1S5Y_').click()
      cy.get(':nth-child(1) > :nth-child(1) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe').click()
      cy.contains("Continuar").click()
      cy.get(':nth-child(1) > .outside_container___21nRy > [style="display: flex; flex: 1 1 0%;"] > .container___2HdHw > :nth-child(2)').click()
      cy.contains('Aceitar'). click()
      //cy.get(':nth-child(2) > .radio_input___3iS67').click()
      cy.get('.bank_digits___3IioE > :nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("123124")
      cy.get(':nth-child(4) > .input_type_container___1U_88 > .input___11dPn').type(1)
      cy.contains('Continuar').click()
      //cy.contains('Permitir').click()
      cy.get(':nth-child(3) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    })
  })  

  describe('Acesso App Web', () => {
    beforeEach(() => {
      cy.viewport(360,640)
    })
    it('successfully loads Androd Devices', () => {
      cy.visit('https://web.homolog.meutudo.app/intro')
      cy.contains('Entrar').click()
      cy.get('.input___11dPn').type("034.383.093-00")
      cy.contains('Entrar').click()
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("123124")
      cy.wait(7000) // Tempo de espera para tela carregar
      cy.get('#onesignal-slidedown-allow-button').click()
      cy.wait(7000) // Tempo de espera para tela carregar
      cy.get(':nth-child(2) > .shadowBox___3MvRy > .outside_container___21nRy > .touchable_container___tPxA5 > [role="presentation"] > .container___2HdHw > .container___3g-7G > .value___1S5Y_').click()
      cy.get(':nth-child(1) > :nth-child(1) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe').click()
      cy.contains("Continuar").click()
      cy.get(':nth-child(1) > .outside_container___21nRy > [style="display: flex; flex: 1 1 0%;"] > .container___2HdHw > :nth-child(2)').click()
      cy.contains('Aceitar'). click()
      cy.get(':nth-child(2) > .radio_input___3iS67').click()
      cy.get('.bank_digits___3IioE > :nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("123124")
      cy.get(':nth-child(4) > .input_type_container___1U_88 > .input___11dPn').type(1)
      cy.contains('Continuar').click()
      cy.contains('Permitir').click()
      cy.get(':nth-child(3) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    })
  })  

  describe('Acesso App Web', () => {
    beforeEach(() => {
      cy.viewport("iphone-6")
    })
    it('successfully loads iPhopne Devices', () => {
      cy.visit('https://web.homolog.meutudo.app/intro')
      cy.contains('Entrar').click()
      cy.get('.input___11dPn').type("034.383.093-00")
      cy.contains('Entrar').click()
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("123124")
      cy.wait(7000) // Tempo de espera para tela carregar
      cy.get('#onesignal-slidedown-allow-button').click()
      cy.wait(7000) // Tempo de espera para tela carregar
      cy.get(':nth-child(2) > .shadowBox___3MvRy > .outside_container___21nRy > .touchable_container___tPxA5 > [role="presentation"] > .container___2HdHw > .container___3g-7G > .value___1S5Y_').click()
      cy.get(':nth-child(1) > :nth-child(1) > .touchable_container___tPxA5 > [role="presentation"] > .card___3XcOe').click()
      cy.contains("Continuar").click()
      cy.get(':nth-child(1) > .outside_container___21nRy > [style="display: flex; flex: 1 1 0%;"] > .container___2HdHw > :nth-child(2)').click()
      cy.contains('Aceitar'). click()
      cy.get(':nth-child(2) > .radio_input___3iS67').click()
      cy.get('.bank_digits___3IioE > :nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("123124")
      cy.get(':nth-child(4) > .input_type_container___1U_88 > .input___11dPn').type(1)
      cy.contains('Continuar').click()
      cy.contains('Permitir').click()
      cy.get(':nth-child(3) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    })
  })  