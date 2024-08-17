function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 0
    var fundo = window.document.getElementById('fundo')
    var fundo2 = window.document.getElementById('secçao')

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 7 && hora <12) {
        //Bom dia
        img.style.backgroundImage = 'url(imagens/Manhã.png)'
        fundo.style.backgroundColor = '#EED6B3'
        fundo2.style.backgroundColor = '#EED6B3'
    } else if (hora >= 12 && hora < 19) {
        //Boa tarde
        img.style.backgroundImage = 'url(imagens/Tarde.png)'
        fundo.style.backgroundColor = '#B67669'
        fundo2.style.backgroundColor = '#B67669'
    } else {
        //Boa noite
        img.style.backgroundImage = 'url(imagens/Noite.png)'
        fundo.style.backgroundColor = '#17202A'
        fundo2.style.backgroundColor = '#17202A'
    }

}

