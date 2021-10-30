///<reference types="cypress" />


describe('Cypress basics', () => {

    it('Should visit a page and assert title',() => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html') //Acessar pagina
        
        cy.title().should('be.equal', 'Campo de Treinamento') //verifica a igualdade do titulo. O should fica tentando a acertiva ate cair no time out
        cy.title().should('contain', 'Treinamento') //verifica se contem o nome 'Treinamento' no titulo
        
        //O seguinte codigo faz a mesma coisa do de cima, so que ele vai fazer a busca do titulo so uma vez, tornando mais rapido
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Treinamento')

        //O seguinte tambem é a mesma coisa, mas fica mais legivel
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Treinamento')
    })
})
