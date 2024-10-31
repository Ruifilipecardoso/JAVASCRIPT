let res = 11
console.log(`A variável "res" é igual a ${res}.`)

function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

//parimp(res)

console.log(`A variável "res" é ${parimp(res)}.`)