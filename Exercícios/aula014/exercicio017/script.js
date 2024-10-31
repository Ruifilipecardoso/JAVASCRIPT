var button = document.getElementById('button')

function tabuada() {
    var numerotxt = document.getElementById('numero') 
    var num = Number(numerotxt.value)
    
    var lista = document.getElementById('tabuada')
    
    var c = 0

    var res = 0
    lista.innerHTML = ''
    for(c = 1; c <= 10; c += 1) {
        var res = num * c
        /*lista.innerHTML += `${num} x ${c} = ${res} `*/
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${res} `
        lista.appendChild(item)
    }
}

button.addEventListener('click', tabuada)