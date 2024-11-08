console.log('Boa noite!!!')

function batata() {
    console.log('Arroz')
}

batata()

let frutas = 'morango'
function mostrarFrutas(frut) {
    console.log(frut)
}

mostrarFrutas(frutas)

function info(nome,idade,cidade) {
    console.log(nome)
    console.log(idade)
    console.log(cidade)
}

info('Lucas', 21, 'Palmares')


function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(5,6))

// Iron function

const soma = (n1,n2) => n1 + n2 

console.log(soma(2,5))