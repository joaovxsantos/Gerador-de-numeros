// function number(){
//     let a = document.getElementById("valor")
//     let valor = a.value
//     let b = window.document.getElementsByTagName("p")[1]
//     let c = Math.floor(Math.random() * valor + 1)
//     b.innerText = "Número gerado: " + c

// }


// const getRandomNumber = (min, max) => {
//     console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//   };



function number() {
    let a = document.getElementById("min");
    let min = parseFloat(prompt("Digite um número"))
    let b = document.getElementById("max");
    let max = parseFloat(prompt("Digite outro número"))
    let c = window.document.getElementsByTagName("p")[1];
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    c.innerText = "Número gerado: " + result;
    
}





