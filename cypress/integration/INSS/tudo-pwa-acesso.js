/// <reference types="cypress" />


      describe('Acesso App Web', () => {
        it('successfully loads', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
        })
      })
        
      describe('Acesso Android Device', () => {
        beforeEach(() => {
          cy.viewport(360,640)
        })
        it('successfully loads', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
        })
      })

      describe('Acesso iPhone Device', () => {
        beforeEach(() => {
          cy.viewport("iphone-6")  
        })
        it('successfully loads', () => {
          cy.visit('https://web.homolog.meutudo.app/intro') 
        })
      })