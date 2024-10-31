let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}.`)

num[5] = 7
num[3] = 1

console.log('--\\--')
console.log(`Nosso vetor é o ${num}.`)

num.push(9)

console.log('--\\--')
console.log(`Nosso vetor é o ${num}.`)

num.sort()

console.log('--\\--')
console.log(`Nosso vetor é o ${num}.`)

console.log('--\\--')
console.log(`Nosso vetor tem ${num.length} elementos.`)
/*

"for" O tradicional que eu prefiro!!!

for(let c = 0; c < num.length; c += 1) {
    console.log(`O índice de número ${c} tem como valor ${num[c]}.`)
}
*/

// "for in" Serve para vetores e objetos mas não gosto muito!!!

for (let c in num) {
    console.log(`O índice de número ${c} tem como valor ${num[c]}.`)
}

console.log('--\\--')
console.log(`O index que corresponde ao valor 8 é o de número ${num.indexOf(8)}.`)
