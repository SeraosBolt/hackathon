let sementes = document.querySelector('#sementes');
let quantia = document.querySelector('#quantia');
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
let old = document.querySelector('#old');
let colhido = document.querySelector('#colhido');
let save = document.querySelector('#save');
let linhas = document.querySelector('#linhas');
let colunas = document.querySelector('#colunas');
let mix = document.querySelector('#mix');
let all = document.querySelector('#all');
let nix = document.querySelector('#nix');
let armazenar = "0";
let cad =[];
let cad2 =[];
let cad3 =[];
let cad4 =[];

quantia.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      armazenamento()
    }
  });

function armazenamento(){
    cad.push(Number(quantia.value));
    quantia.value = " ";
    cad2.push(Number(peso1.value));
    peso1.value = " ";
    cad3.push(Number(peso2.value));
    peso2.value = " ";
    cad4.push(Number(sacas.value));
    sacas.value = " ";
        
  }
salvar.onclick = function(){
    armazenamento()
}