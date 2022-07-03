let btSomar = document.querySelector('#somar')
let btSsubtrair = document.querySelector('#subtrair')
let btVoltar = document.querySelector("#voltar")


function abrePopUp(){
    let varWindow = window.open('../Gastos_Lucros/pagLucro/lucro.html', 'popup', "width = 620 , height = 420 , top = 300, left = 690, scrollbars = no")
}
function abrePopUp2(){
    let varWindow = window.open('../Gastos_Lucros/pagGasto/gasto.html', 'popup', "width = 520 , height = 320 , top = 300, left = 690, scrollbars = no")
}
function voltar(){
    window.location = '../LandingPage/index.html'
}


btSomar.onclick = function(){
    abrePopUp()
}
btSsubtrair.onclick = function(){
    abrePopUp2()
}

btVoltar.onclick = function(){
    voltar()
}