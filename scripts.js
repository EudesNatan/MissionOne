var botao = document.getElementById("button")
var select = document.getElementById("select-moedas")



async function converterMoedas() {
    
    var moedas =  await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
})

        var dolar = moedas.USDBRL.high
        var euro = moedas.EURBRL.high


    var inputValorReais = Number(document.getElementById("input").value)
    var inputMoedas = document.getElementById("Input-Moedas")
    var textoReais = document.getElementById("texto-Reais")


if (select.value === "US$ - Dolar Americano") {
    var ConverterDolar = inputValorReais / dolar
    inputMoedas.innerHTML = ConverterDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

}
if (select.value === "€ - Euro") {
    var ConverterEuro = inputValorReais / euro
    inputMoedas.innerHTML = ConverterEuro.toLocaleString("de-De", { style: "currency", currency: "EUR" })
}

    textoReais.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}

 function trocarMoedas() {


    var textoMoedas = document.getElementById("texto-moeda")
    var Bandeiras = document.getElementById("bandeira-moedas")
    if (select.value === "US$ - Dolár Americano") {
        textoMoedas.innerHTML = "Dolar Americano"
        Bandeiras.src = "./img/dolar.png"

    }
    if (select.value === "€ - Euro") {
        textoMoedas.innerHTML = "Euro"
        Bandeiras.src = "./img/euro.png"

    }

    converterMoedas()

}
botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocarMoedas)