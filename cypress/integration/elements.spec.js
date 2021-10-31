///<reference types="cypress" />

describe('Work with basic elements', () => {
it('Text',()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html') //Acessar pagina
    
   //procurar o texto na area total do body
   cy.get('body').should('contain','Cuidado') //ele vê se no body contem a palavra cuidado. Body é a estrutura do html
   cy.get('span').should('contain','Cuidado') //nesse caso ele procutou a tag span e verificou se contem o texto 'cuidado'
   cy.get('.FacilAchar').should('contain','Cuidado')//nesse caso ele pegou a classe .facilachar' e fez a mesma verificacao. (É utilizado ponto para definir que é uma classe)
   cy.get('.FacilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...') //aqui ele verifica sse o texto esta igual
    
    })

    //validar links
    it('Links', () => {
        cy.get('[href="#"]').click() //clicou no botao de link
        cy.get('#resultado').should('have.text','Voltou!') //verificou se o resultado ficou com texto 'Voltou'

        cy.reload()//serve para recarregar a pagina(F5)
        cy.get('#resultado').should('not.have.text','Voltou!') //verifica se antes do clique nao tinha o voltou
        cy.contains('Voltar').click() //com contains, busca o elemento pelo nome.
        cy.get('#resultado').should('have.text','Voltou!')

        //atencao ao utilizar o contains. é melhor usar o get, pois fica atrelado a um id, ou a algumas classes... Fica mais confiavel
        

    })

})