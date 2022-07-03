let body = document.querySelector("#body"); // carrega o body
let logado = Boolean(false)
let userName = document.querySelector("#userName");
let user = "Nome vai aqui";

import { userLogado } from "../../../loginPage/Scripts/loginPageScript";

function newPopup(){ // função que abre a tela de login
    let varWindow = window.open('../../loginPage/loginPage.html','popup',"width=520, height=320, top=300, left=690, scrollbars=no ")
}

body.onload = function(){ // quando carrega o body inicia a função
    if(logado == false){  // se 'logado' for falso abre o pop-up da tela de login
        newPopup()
    }
}

function seila(){
    p.innerHTML = p.innerHTML+ "Fiadaputa"
}
