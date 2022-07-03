let sementes = document.querySelector('#sementes');
let metros = document.querySelector('#metros');
let peso1 = document.querySelector('#peso1');
let venda1 = document.querySelector('#venda1');
let valor1 = document.querySelector('#valor1');
let peso2 = document.querySelector('#peso2');
let venda2 = document.querySelector('#venda2');
let valor2 = document.querySelector('#valor2');
let sacas = document.querySelector('#sacas');
let venda3 = document.querySelector('#venda3');
let compra = document.querySelector('#compra');
let maquinario = document.querySelector('#maquinario');
let data = document.querySelector('#data');
let colhido = document.querySelector('#colhido');
let bruto = document.querySelector('#bruto');
let despesas = document.querySelector('#despesas');
let save = document.querySelector('#save');
let linhas = document.querySelector('#linhas');
let colunas = document.querySelector('#colunas');
let old = document.querySelector("#old");
let all = document.querySelector('#all');
let mix = document.querySelector('#mix');
let nix = document.querySelector('#nix');
let tirça = document.querySelector('#tirça');
let matriz = [][]; 
 
function saver(){
    let gastos = (Number(peso1.value)*Number(valor1.value))+(Number(peso2.value)*Number(valor2.value))+(Number(sacas.value)*Number(compra.value))
    mix.innerHTML = Number(colhido.value)/x;
    nix.innerHTML = Number(bruto.value)-Number(despesas.value);
}
function matriz(){
    let x  = 0
    let q = Number(linhas.value);
    let t = Number(colunas.value);
    for(let a = 0; a < q.lenght; a++){
        for(let b = 0 ; b < t.lenght; b++){
            matriz [q][t] = ("Sec"+x+1);
           
    }tirça.innerHTML = String(matriz[q][t]);
    String("<br>");
    }
    
}
all.onclick = function(){
    matriz();
}
save.onclick = function(){
 saver();
}
