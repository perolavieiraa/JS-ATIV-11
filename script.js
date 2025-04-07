//é necessário executar uma de cada vez pra funcionar

//1 

let soma = 0, num;
while ((num = prompt("Digite um número (ou 'sair' para finalizar):")) !== "sair") {
    soma += Number(num);
}
alert("Total da soma: " + soma);


//2

let contagem = 10;
let intervalo = setInterval(() => {
    console.log(contagem);
    if (contagem === 0) {
        clearInterval(intervalo);
        console.log("Lançamento!");
    }
    contagem--;
}, 1000);

//3

let ganho = Number(prompt("Ganho mensal:")) * 12, gasto = 0;
for (let i = 1; i <= 12; i++) gasto += Number(prompt(`Gasto mês ${i}:`));
alert(`Ganhos: R$${ganho}\nGastos: R$${gasto}\nSaldo: R$${ganho - gasto}\n${ganho >= gasto ? "Lucro" : "Prejuízo"}`);

//4 

let numeros = [];
for (let i = 0; i < 4; i++) {
    numeros.push(Number(prompt(`Digite o ${i + 1}º número:`)));
}
numeros.sort((a, b) => b - a);
alert("Ordem decrescente: " + numeros.join(", "));

//5

let num = Number(prompt("Digite um número:"));
alert(num % 2 === 0 ? num + 1 : num - 1);

//6

let letra = prompt("Digite uma letra:").toLowerCase();
if ("aeiou".includes(letra)) {
    alert("Vogal");
} else {
    alert("Consoante");
} 

//7

let cardapio = {
    "chocolate": 1.50, "morango": 2.50, "creme": 2.50,
    "manga": 3.20, "melancia": 3.40, "vanilla ice": 3.00,
    "céu azul": 3.60, "brownie": 4.00, "hawaiano": 5.00
};

alert("Sabores disponíveis:\n" + Object.keys(cardapio).map(sabor => sabor.charAt(0).toUpperCase() + sabor.slice(1)).join("\n"));

let escolha = prompt("Digite o sabor desejado:").toLowerCase();
alert(cardapio[escolha] ? `Preço: R$${cardapio[escolha].toFixed(2)}` : "Sabor não encontrado");

//8

let numeroSorteado = Math.floor(Math.random() * 100) + 1;
let tentativa;
do {
    tentativa = Number(prompt("Adivinhe um número entre 1 e 100:"));
    alert(tentativa > numeroSorteado ? "Muito alto!" : tentativa < numeroSorteado ? "Muito baixo!" : "Acertou!");
} while (tentativa !== numeroSorteado);

//9

let frase = prompt("Digite uma frase:").toLowerCase();
alert("Vogais: " + frase.split("").filter(l => "aeiouáéíóúâêîôûãõ".includes(l)).length);

//10

let senha = prompt("Digite uma senha:");

let temMaiuscula = false;
let temMinuscula = false;
let temNumero = false;

for (let char of senha) {
    if (char >= 'A' && char <= 'Z') temMaiuscula = true;
    if (char >= 'a' && char <= 'z') temMinuscula = true;
    if (char >= '0' && char <= '9') temNumero = true;
}

if (senha.length >= 8 && temMaiuscula && temMinuscula && temNumero) {
    alert("Senha válida");
} else {
    alert("Senha inválida (deve ter 8 caracteres, uma maiúscula, uma minúscula e um número)");
}

//11

let num = Number(prompt("Digite um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

//12 

let produtos = [];
for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do produto:");
    let preco = Number(prompt("Digite o preço do produto:"));
    produtos.push({ nome, preco });
}

let total = produtos.reduce((sum, p) => sum + p.preco, 0);
alert("Produtos cadastrados:\n" + produtos.map(p => `${p.nome}: R$${p.preco}`).join("\n") + `\nTotal: R$${total}`);