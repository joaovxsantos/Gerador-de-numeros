function number(){
    let a = document.getElementById("valor")
    let valor = a.value
    let b = window.document.getElementsByTagName("p")[1]
    let c = Math.floor(Math.random() * valor + 1)
    b.innerText = "Número gerado: " + c

}