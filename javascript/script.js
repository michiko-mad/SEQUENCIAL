let numero1
let numero2
let resultado1
function somar()
    {
       numero1 = parseInt(document.getElementById("numero1").value)
        numero2 = parseInt(document.getElementById("numero2").value)
        resultado1 = numero1 * numero2
        document.getElementById("resultado1").innerHTML= resultado1
    }

    let celsius, f 
    function converter()
    {
        celsius = parseFloat(document.getElementById("celcius").value)
        f = (celsius*9/5) + 32
        document.getElementById("resultado2").innerHTML = f
    }
    let altura, raio, volume
    function volume()
    {
    altura = parseInt(document.getElementById(altura).value)
    raio = parseFloat(document.getElementById(raio).value)

    volume = altura*raio*3.14

    document.getElementById("volume").innerHTML = volume
    } 

    let altura2, largura2, comprimento2

    function volume2()
    {
        altura2 = parseInt(document.getElementById(altura2).value)
        largura2 = parseInt(document.getElementById(largura2).value)
        comprimento2 = parseInt(document.getElementById(comprimento2).value)
        volume2 = altura2*largura2*comprimento2
        document.getElementById("volume2").innerHTML = volume2
    }

