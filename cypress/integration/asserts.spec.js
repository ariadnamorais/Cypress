//Exemplo de Acertiva

/// <reference types="cypress"/>

//Exemplo de acertiva de igualdade
it('Equality', () => {
    const a = 1;

    expect(a).equal(1); //verifica se o A é igual a 1 mesmo
    expect(a,'Deveria ser 1').equal(1);
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
        a:1,
        b:2
    }

    expect(obj).equal(obj)   //Varias formas de verificar se o obj é igual a obj
    expect(obj).equals(obj) //Varias formas de verificar se o obj é igual a obj
    expect(obj).eq(obj) //Varias formas de verificar se o obj é igual a obj
    //expect(obj).to.be.equal(obj) //Varias formas de verificar se o obj é igual a obj

    //deve colocar o deep para verificar se as propriedades dos objetos sao iguais
    expect(obj).to.be.deep.equal({a:1, b:2}) //Varias formas de verificar se o obj é igual a obj

    //forma mais curta de fazer a checagem acima
    expect(obj).eql({a:1, b:2})//Varias formas de verificar se o obj é igual a obj

    //verifica a igualdade da propriedade dentro do objeto
    expect(obj).include({a:1})//vai verificar se detro do obj a contem a propriedade a com valor 1

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

    expect(arr).to.have.members([1,2,3]) //espera que o array possua os membros 1,2,3
    expect(arr).to.include.members([1,3]) //verifica se os membros estao incluidos
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

//Checar os tipos

