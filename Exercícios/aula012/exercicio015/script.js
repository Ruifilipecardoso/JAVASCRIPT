function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os Dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe.png')
            } else if (idade <= 25) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else if (idade >= 65) {
                //Idoso
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        } else if (fsex[1].checked) {
            sexo = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe.png')
            } else if (idade <= 25) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'imagens/adultoF.png')
            } else if (idade >= 65) {
                //Idoso
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos!`
        res.appendChild(img)
    }
}