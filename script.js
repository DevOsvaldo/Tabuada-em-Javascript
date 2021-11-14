function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Error, Digite um numero valido.') //Erro apenas se não inserir número.

    } else {
        let n = Number(num.value) //Passando a String para Number
        let c = 1
        tab.innerHTML = ''
            /*para que toda vez que digitar um número, 
                    a calculadora dará "replace" no numero atual*/
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
            /*Usei o while, porem é possivel solucionar usando "for".*/
        }
    }
}
