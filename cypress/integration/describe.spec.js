//Exemplo de Describe/It

/// <reference types="cypress"/>

it('A external test...', () => {

})

describe('Grupo de teste', () => {
    describe('Grupo especifico de teste 1', () => {
        it('Um teste especifico 1', () => {
        })
        it('Um teste especifico 2', () => {            
        })
    })

    describe('Grupo especifico de teste 2', () => {
        it('Um teste especifico 1',() => {
        })
        it('Um teste especifico 2',() => {
        })
    })

    it('Um teste interno 1', () => {
    })
    it('Um teste interno 2', () => {

    })
})

//Obs.: Posso incluir um .skip apos o it para ele pular o teste ou apos o describe para pular o grupo
//ex.: it.skip('Um teste especifico 1',() => { })

//Obs.: Posso incluir um .only após o it para executar apenas o teste ou apos describe para o grupo de teste
//Ex.: it.only('um teste especifico 1', () => { })  (Ele so vai obdecer o ultimo only) // teste