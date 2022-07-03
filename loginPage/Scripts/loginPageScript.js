let btnLogin = document.querySelector("#btnLogin"); // inicia a variavel botao
let inpUser = document.querySelector("#inpUser");   // inicia a variavel do input user
let userName = document.querySelector("#userName"); // carrega o nome de usuário na página main
const userLogado = userName;

export { userLogado };

function closeWindow(){                             // função que fecha a página
    this.close();
}

function setUser(){
    userName.textContent = inpUser.value;
}

btnLogin.onclick = function(){                      // função que executa quando clica no botão login
    closeWindow();
}
