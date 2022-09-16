let Gerar = document.querySelector('#gerar')


function numero(){


      

}







function number() {
    let a = document.getElementById("min");
    let min = parseInt(a.value)
    let b = document.getElementById("max");
    let max = parseInt(b.value)
    let c = window.document.getElementsByTagName("p")[1];
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    c.innerText = "Número gerado: " + result;
}


Gerar.addEventListener('click', numero)


