/// <reference types="cypress" />

/// WEB DEVICES


describe('Cadastro Web Device', () => {
  it('Selecionar Benefícios', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    //cy.get('.false > .button_container___Tboql').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
  })
}) 

  describe('Cadastro Web Device', () => {
  it('Dados Cadastrais', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    //cy.get('.false > .button_container___Tboql').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
    cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Nome Completo")
    cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
    cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
    cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
  })
})

describe('Cadastro Web Device', () => {
it('Confirmar Termo e Políticas', () => {
  cy.visit('https://web.homolog.meutudo.app/intro') 
  cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
  //cy.get('.false > .button_container___Tboql').click()
  cy.get('#retired_or_pensioner').click()
  //cy.get('#retired').click()
  cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Nome Completo")
  cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
  cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
  cy.get(':nth-child(1) > .touchable_container___tPxA5 > .inline___2uWCl > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
  cy.wait(2000)
  cy.go('back')
  cy.contains('Política').click()
  cy.wait(2000)
  cy.go('back')
  cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
})
}) 

describe('Cadastro Web Device', () => {
  it('Informar CPF', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
    cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
    cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
    cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
    //cy.wait(2000)
    cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('.input___11dPn').type("709.320.740-57")
    cy.get('.false > .button_container___Tboql').click()
  })
}) 

describe('Cadastro Web Device', () => {
    it('Reenviar SMS Token e Envio WhatsApp', () => {
      cy.visit('https://web.homolog.meutudo.app/intro') 
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      cy.get('#retired_or_pensioner').click()
      //cy.get('#retired').click()
      cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
      cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
      //cy.wait(2000)
      cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      cy.get('.input___11dPn').type("709.320.740-57")
      cy.get('.false > .button_container___Tboql').click()
      cy.wait(45000)
      cy.get(':nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      cy.get('.touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    })
  }) 




// ANDROID DEVICES

        describe('Cadastro Android Device', () => {
        beforeEach(() => {
            cy.viewport(360,640)
          })
        it('Selecionar Benefícios', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
          cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          //cy.get('.false > .button_container___Tboql').click()
          cy.get('#retired_or_pensioner').click()
          //cy.get('#retired').click()
        })
    }) 

        describe('Cadastro Android Device', () => {
        beforeEach(() => {
            cy.viewport(360,640)
          })
        it('Dados Cadastrais', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
          cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          //cy.get('.false > .button_container___Tboql').click()
          cy.get('#retired_or_pensioner').click()
          //cy.get('#retired').click()
          cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Nome Completo")
          cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
          cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
          cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
        })
    })

    describe('Cadastro Android Device', () => {
      beforeEach(() => {
          cy.viewport(360,640)
        })
      it('Confirmar Termo e Políticas', () => {
        cy.visit('https://web.homolog.meutudo.app/intro') 
        cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
        //cy.get('.false > .button_container___Tboql').click()
        cy.get('#retired_or_pensioner').click()
        //cy.get('#retired').click()
        cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Nome Completo")
        cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
        cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
        cy.get(':nth-child(1) > .touchable_container___tPxA5 > .inline___2uWCl > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
        cy.wait(2000)
        cy.go('back')
        cy.contains('Política').click()
        cy.wait(2000)
        cy.go('back')
        cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      })
  }) 
 
    describe('Cadastro Android Device', () => {
      beforeEach(() => {
          cy.viewport(360,640)
        })
        it('Informar CPF', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
          cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          //cy.get('.false > .button_container___Tboql').click()
          cy.get('#retired_or_pensioner').click()
          //cy.get('#retired').click()
          cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
          cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
          cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
          //cy.wait(2000)
          cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          cy.get('.input___11dPn').type("709.320.740-57")
          cy.get('.false > .button_container___Tboql').click()
        })
      }) 

      describe('Cadastro Android Device', () => {
        beforeEach(() => {
            cy.viewport(360,640)
          })
          it('Reenviar SMS Token e Envio WhatsApp', () => {
            cy.visit('https://web.homolog.meutudo.app/intro') 
            cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
            cy.get('#retired_or_pensioner').click()
            //cy.get('#retired').click()
            cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
            cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
            cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
            //cy.wait(2000)
            cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
            cy.get('.input___11dPn').type("709.320.740-57")
            cy.get('.false > .button_container___Tboql').click()
            cy.wait(45000)
            cy.get(':nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
            cy.get('.touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
          })
        }) 




// IOS DEVICES

describe('Cadastro iOS Device', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    })
  it('Selecionar Benefícios', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    //cy.get('.false > .button_container___Tboql').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
  })
}) 

  describe('Cadastro iOS Device', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    })
  it('Dados Cadastrais', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    //cy.get('.false > .button_container___Tboql').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
    cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Nome Completo")
    cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
    cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
    cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
  })
})

describe('Cadastro iOS Device', () => {
beforeEach(() => {
  cy.viewport('iphone-x')
  })
it('Confirmar Termo e Políticas', () => {
  cy.visit('https://web.homolog.meutudo.app/intro') 
  cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
  //cy.get('.false > .button_container___Tboql').click()
  cy.get('#retired_or_pensioner').click()
  //cy.get('#retired').click()
  cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Nome Completo")
  cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
  cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
  cy.get(':nth-child(1) > .touchable_container___tPxA5 > .inline___2uWCl > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
  cy.wait(2000)
  cy.go('back')
  cy.contains('Política').click()
  cy.wait(2000)
  cy.go('back')
  cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
})
}) 

describe('Cadastro iOS Device', () => {
beforeEach(() => {
  cy.viewport('iphone-x')
  })
  it('Informar CPF', () => {
    cy.visit('https://web.homolog.meutudo.app/intro') 
    cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    //cy.get('.false > .button_container___Tboql').click()
    cy.get('#retired_or_pensioner').click()
    //cy.get('#retired').click()
    cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
    cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
    cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
    //cy.wait(2000)
    cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    cy.get('.input___11dPn').type("709.320.740-57")
    cy.get('.false > .button_container___Tboql').click()
  })
}) 

describe('Cadastro iOS Device', () => {
  beforeEach(() => {    
      cy.viewport('iphone-x')
    })
    it('Reenviar SMS Token e Envio WhatsApp', () => {
      cy.visit('https://web.homolog.meutudo.app/intro') 
      cy.get(':nth-child(2) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      cy.get('#retired_or_pensioner').click()
      //cy.get('#retired').click()
      cy.get(':nth-child(1) > .input_type_container___1U_88 > .input___11dPn').type("Leonardo Teste")
      cy.get(':nth-child(2) > .input_type_container___1U_88 > .input___11dPn').type("85989294554")
      cy.get(':nth-child(3) > .input_type_container___1U_88 > .input___11dPn').type("a@a.com.br")
      //cy.wait(2000)
      cy.get('.false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      cy.get('.input___11dPn').type("709.320.740-57")
      cy.get('.false > .button_container___Tboql').click()
      cy.wait(45000)
      cy.get(':nth-child(1) > .touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
      cy.get('.touchable_container___tPxA5 > .false > .button_container___Tboql > .content___vRdmy > .title___2X_mQ').click()
    })
  })