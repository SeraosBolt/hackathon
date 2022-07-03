let btSomar = document.querySelector('#somar')
let btSsubtrair = document.querySelector('#subtrair')


function abrePopUp(){
    let varWindow = window.open('../Gastos_Lucros/pagLucro/lucro.html', 'popup', "width = 520 , height = 320 , top = 300, left = 690, scrollbars = no")
}


btSomar.onclick = function(){
    abrePopUp()
}