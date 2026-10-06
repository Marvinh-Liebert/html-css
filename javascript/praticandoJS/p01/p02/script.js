function verif(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if(fano.value.lenght == 0 || fano.value > ano){
        window.alert ('Verifique os dados e tente novamente!')
    } else {
        var sex = window.document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        res.innerHTML = 'Idade calculada: ' + idade + 'anos'
    }
}