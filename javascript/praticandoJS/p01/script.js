function carregar(){
    var msg = window.document.getElementById('msg')
    var ft = window.document.getElementById('ft')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas'

    if (hora >= 0 && hora < 12){
        ft.src = 'imagens/manha.js.jpg'
        msg.innerHTML += ' da manhã'
        document.body.style.background = "rgb(92, 143, 190)"
    } else if (hora >= 12 && hora < 18){
        ft.src = 'imagens/tarde.js.jpg'
        msg.innerHTML += ' da tarde'
        document.body.style.background ='rgb(253, 169, 74)'
    } else {
        ft.src = 'imagens/noite.js.jpg'
        msg.innerHTML += ' da noite'
        document.body.style.background = 'rgb(35, 34, 41)'
    }
}