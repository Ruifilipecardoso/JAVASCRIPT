let num = []

let adi = document.getElementById('button_adicionar')
let div3 = document.getElementById('div3')

function adicionar() {
    let txt = document.getElementById('itxt')
    let txtnum = Number(txt.value)
    if (txtnum > 100 || txtnum < 1 || num.indexOf(txtnum) != -1) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        num.push(txtnum)
        let item = document.createElement('option')
        item.text = `Valor ${txtnum} adicionado.`
        let quadro = document.getElementById('iquadro')
        quadro.appendChild(item)
        div3.innerHTML = ''
    }
    txt.value = ''
    txt.focus()
}


let final = document.getElementById('button_finalizar')

function sortcrescente(a , b) {
    return (a - b)
}

function finalizar() {
    if (num.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        num.sort(sortcrescente)

        //window.alert(`${num}`)
        
        
        let todo = document.createElement('p')
        todo.innerHTML = `Ao todo, temos ${num.length} números cadastrados.`

        
        let maior = document.createElement('p')
        maior.innerHTML = `O maior valor informado foi ${num[num.length - 1]}.`

        let menor = document.createElement('p')
        menor.innerHTML = `O menor valor informado foi ${num[0]}.`

        let somando = document.createElement('p')
        let soma = 0
        for (let c = 0; c <= num.indexOf(num[num.length - 1]); c += 1) {
            soma += num[c]
        }
        somando.innerHTML = `Somando todos os valores, temos ${soma}.`

        let mediando = document.createElement('p')
        let media = soma / num.length
        mediando.innerHTML = `A média dos valores digitados é ${media}.`

        div3.appendChild(todo)
        div3.appendChild(maior)
        div3.appendChild(menor)
        div3.appendChild(somando)
        div3.appendChild(mediando)
        
    }
    
}

adi.addEventListener('click', adicionar)
final.addEventListener('click', finalizar)


