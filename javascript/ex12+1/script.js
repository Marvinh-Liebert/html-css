function cont() {
    var inicio = document.getElementById('inicio')
    
    var fim = document.getElementById('fim')
        
    var pulos = document.getElementById('pulos')
    
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pulos.value.length == 0){
        window.alert ("preencha os dados requisitados!")
    } else {
        res.innerHTML = ('contando... :')

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulos.value)
        if (i < f){
            for (let c = i; c <= f; c += p){
            res.innerHTML +=  ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML +=  ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F595}`
    }
}