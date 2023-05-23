"use strict";
//variaveis
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Fabio";
let idade = 38;
let altura = 1.9;
//tipos especiais: null e undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any e void
function executaQuery() { }
;
let retorno;
let retornoView = false;
//objeto sem previsibilidade
let produto = {
    name: "Fabio",
    cidade: "Marilia",
    estado: "SP"
};
let meuProduto = {
    nome: "Tenis",
    preco: 90.99,
    unidade: 2
};
/**
 * Arrays
 */
let dados = ["Fulano", "Ciclano", "Beltrano"];
let dados2 = ["Fulano", "Ciclano", "Beltrano"];
let infos = ["Fulano", 2];
/**
 * Tuplas -> deve-se respeitar a ordem em que foi declarada
 */
let boletos = ["conta", 100, 20];
/**
 * Arrays métodos
 */
dados.map(dados => console.log(dados));
dados.filter(dados => console.log(dados));
/**
 * Datas
 */
let aniversario = new Date('2022-12-01 05:00');
console.log(aniversario.toString());
