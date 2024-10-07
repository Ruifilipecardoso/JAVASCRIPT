
var contar = document.getElementById('button')

function contar_açao() {
    var inicio = document.getElementById('inicio')

    var fim = document.getElementById('fim')

    var passo = document.getElementById('passo')

    var contagem = document.getElementById('contagem')

    contagem.innerHTML = ''

    if (inicio.value.length == 0) {
        inicio.value = 0
    }

    if (fim.value.length == 0) {
        fim.value = 0
    }

    if (Number(inicio.value) == Number(fim.value)) {
        contagem.innerHTML = 'O início e o fim são iguais! Que poético...'
        contagem.style.color = 'red'

    } else if (Number(passo.value) == 0) {
        contagem.innerHTML = 'Impossível contar com um PASSO inixistente!'
        contagem.style.color = 'red'
        
    } else if (Number(inicio.value) < Number(fim.value) && Number(passo.value) < 0 || Number(inicio.value) > Number(fim.value) && Number(passo.value) > 0) {
        contagem.style.color = 'red'
        contagem.innerHTML = 'Caminho errado!'

    } else if (Number(inicio.value) < Number(fim.value)) {
        contagem.style.color = 'black'
        //Contagem cresente
        for ( inicio = Number(inicio.value); inicio <= Number(fim.value) ; inicio += Number(passo.value)) {
            contagem.innerHTML += `${inicio} 👉 `
        }
        contagem.innerHTML += '🏁'
        /*
        inicio = Number(inicio.value)
        
        while (inicio <= Number(fim.value)) {
            contagem.innerText += `...${inicio}`
            inicio += Number(passo.value)
        }*/

    }else if (Number(inicio.value) > Number(fim.value)) {
        contagem.style.color = 'black'
        //Contagem regressiva
        for (inicio = Number(inicio.value); inicio >= Number(fim.value) ; inicio += Number(passo.value)) {
            contagem.innerHTML += `${inicio} 👉 `
        }
        if (inicio <= Number(fim.value)) {
            contagem.innerHTML += '🏁'
        }
    }
    
    
}

contar.addEventListener('click', contar_açao)