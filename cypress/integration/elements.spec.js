///<reference types="cypress" />

describe('Work with basic elements', () => {

    //esse vai servir para executar o visit em todos os it's (em todas as baterias de teste)
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html') //Acessar pagina
    })

    //esse irá executar antes de cada teste
    beforeEach(() => {
        cy.reload() //recarrega a pagina
    })

    //é interessante limpar o cache quando for teste real (pesquisar)

    it('Text', () => {

        //procurar o texto na area total do body
        cy.get('body').should('contain', 'Cuidado') //ele vê se no body contem a palavra cuidado. Body é a estrutura do html
        cy.get('span').should('contain', 'Cuidado') //nesse caso ele procutou a tag span e verificou se contem o texto 'cuidado'
        cy.get('.FacilAchar').should('contain', 'Cuidado')//nesse caso ele pegou a classe .facilachar' e fez a mesma verificacao. (É utilizado ponto para definir que é uma classe)
        cy.get('.FacilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //aqui ele verifica sse o texto esta igual

    })

    //validar links
    it('Links', () => {
        cy.get('[href="#"]').click() //clicou no botao de link
        cy.get('#resultado').should('have.text', 'Voltou!') //verificou se o resultado ficou com texto 'Voltou'

        cy.reload() //serve para recarregar a pagina(F5)
        cy.get('#resultado').should('not.have.text', 'Voltou!') //verifica se antes do clique nao tinha o voltou
        cy.contains('Voltar').click() //com contains, busca o elemento pelo nome.
        cy.get('#resultado').should('have.text', 'Voltou!')

        //atencao ao utilizar o contains. é melhor usar o get, pois fica atrelado a um id, ou a algumas classes... Fica mais confiavel


    })
    it.only('TextFields', () => {
        cy.get('#formNome').type('Cypress Test') //Serve para escrever texto dentro do campo
        //Esse nao funciona//cy.get('#formNome').should('have.text','Cypress Test')//Aqui ele faz a acertiva para ver se contem o texto digitado anteriormente
        cy.get('#formNome').should('have.value', 'Cypress Test') //O should nao vai funcionar para pegar o texto, por isso deve pegar pelo value do campo, assim ele vai ver o texto que contem dentro dele

        //DICA
        //fazer o teste acima encadiando o get para ficar mais rapido. Exemplo a seguir com o outro campo de texto
        cy.get('#elementosForm\\:sugestoes')  //esse objeto possui dois pontos, é importante colocar duas barras a esquerda para ele entender
            .type('textarea')
            .should('have.value', 'textarea')

        //trabalhando com o backspace (apagar 1 letra do texto)
        cy.get('[data-cy=dataSobrenome]')
            .type('Teste 12345{backspace}{backspace}')
            .should('have.value', 'Teste 123')

        //Limpar tudo do campo
        cy.get('#elementosForm\\:sugestoes')  //esse objeto possui dois pontos, é importante colocar duas barras a esquerda para ele entender
            .clear()//aqui limpa
            .type('texto qualquer{selectall}acerto', {delay:100}) //escreve, seleciona todo o texto e escreve a palavra acerto - O delay foi para ver ele fazendo o processo de selecionar tudo e escrever por cima
            .should('have.value','acerto') //confere


    })

})