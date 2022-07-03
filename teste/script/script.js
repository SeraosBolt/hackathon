let botao = document.querySelector("#botao")

function newPopup(){
    let varWindow = window.open('popup.html','popup',"width=550, height=255, top=100, left=110, scrollbars=no ")
}

botao.onclick = function(){
    newPopup()
}