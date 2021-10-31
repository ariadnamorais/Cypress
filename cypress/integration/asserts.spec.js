//Exemplo de Acertiva

/// <reference types="cypress"/>

//Exemplo de acertiva de igualdade
it('Equality', () => {
    const a = 1;

    expect(a).equal(1); //verifica se o A é igual a 1 mesmo
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

//Exemplo de acertiva para identificar se é verdadeiro ou não
it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(a).to.be.true;   //pode ser: expect(true).to.be.true
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

//Exemplo de acertiva para comparar a igualdade de objetos
it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)   //Varias formas de verificar se o obj é igual a obj
    expect(obj).equals(obj) //Varias formas de verificar se o obj é igual a obj
    expect(obj).eq(obj) //Varias formas de verificar se o obj é igual a obj
    //expect(obj).to.be.equal(obj) //Varias formas de verificar se o obj é igual a obj

    //deve colocar o deep para verificar se as propriedades dos objetos sao iguais
    expect(obj).to.be.deep.equal({ a: 1, b: 2 }) //Varias formas de verificar se o obj é igual a obj

    //forma mais curta de fazer a checagem acima
    expect(obj).eql({ a: 1, b: 2 })//Varias formas de verificar se o obj é igual a obj

    //verifica a igualdade da propriedade dentro do objeto
    expect(obj).include({ a: 1 })//vai verificar se detro do obj a contem a propriedade a com valor 1

    //verifica se o obj prossui a propriedade b
    expect(obj).to.have.property('b')

    //verifica se o obj prossui a propriedade b e que o valor da propriedade b seja 2
    expect(obj).to.have.property('b', 2)

    //verifica se obj nao esta vazio
    expect(obj).to.not.be.empty

    //ver se o objeto vazio esta vazio
    expect({}).to.be.empty

})

//fazer acertivas com array
it('Arrays', () => {
    const arr = [1, 2, 3]

    expect(arr).to.have.members([1, 2, 3]) //espera que o array possua os membros 1,2,3
    expect(arr).to.include.members([1, 3]) //verifica se os membros estao incluidos
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

//Checar os tipos
it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number') //verifica se num é tipo number
    expect(str).to.be.a('string') //verifica se str é tipo string
    expect({}).to.be.an('object') //verifica se é objeto
    expect([]).to.be.an('array') // verifica se é array
})

//verificação em string
it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste') //verifica se o texto esta igual ao do objeto(str)
    expect(str).to.be.have.length(15) //verifica se tem 15 caracteres
    expect(str).to.be.contains('de') //verifica se contem o valor informado
    expect(str).to.match(/teste$/) //deve finalizar com a palavra "teste"
    expect(str).to.match(/^Stri/) //deve iniciar com as letras "stri"
    expect(str).to.match(/.{15}/) //verifica se tem 15 caracteres
    expect(str).to.match(/\w+/) //verifica se existe apenas letras 
    expect(str).to.match(/\D+/) //verifica se nao contem numeros
})

//Verificação com numeros
it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) //verifica se é igual a 4
    expect(number).to.be.above(3) //verifica se é acima de 3
    expect(number).to.be.below(7) //verifica se é abaixo de 7

    expect(floatNumber).to.be.equal(5.2123) //verifica igualdade
    expect(floatNumber).to.be.closeTo(5.2, 0.1) //verifica se o  numero flutuante esta proximo de 5.2 e com precisao de 0.1, isso se deve pq nem sempre possui numero exato



})