let Gerar = document.querySelector('#gerar')


function numero() {

    let div = document.querySelector('.content')
    let p1 = document.querySelector('#p1')
    let minimo = Number(document.querySelector('#min').value)
    let maximo = Number(document.querySelector('#max').value)
    p1.innerHTML = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo


}


Gerar.addEventListener('click', numero)


