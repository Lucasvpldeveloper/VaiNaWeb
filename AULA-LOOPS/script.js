console.log('Boa noite!')

// for 

for(let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 1; i <= 10; i += 2) {
    console.log(i)
}

let i = 5
while (i > 0) {
    console.log(i)
    i--
}


let iphone = 1
while (iphone <= 16) {
    console.log('IPhone ' + iphone)
    iphone++
}

let login = "vini"
let senha = 1234

if ( login == 'vini' && senha == 1234) {
    console.log('Acesso Liberado')
} else {
    console.log('Acesso negado')
}

let dialindo = false

let diaposto = true

if (dialindo || diaposto) {
    console.log('Vou para a praia')
}else {
    console.log('Não deu praia')
}

// Operadores de atribuição 

// +
// -
// *
// /
// ++
// --

let numero = 5

console.log(--numero)
console.log(numero)