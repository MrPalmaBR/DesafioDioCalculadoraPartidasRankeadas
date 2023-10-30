// Mensagem de apresentação do projeto
console.log("Seja bem-vindo (a) ao Classificador de Heróis");
console.log("");

// Entrada do usuário, com os dados do herói
let nomeHeroi = "Tonhão";
let xp = 1001;

// Matriz de níveis, onde cada submatriz contém [nome do nível, limite de XP]
const niveis = [
    ["Ferro" , 1000],
    ["Bronze" , 2000],
    ["Prata" , 5000],
    ["Ouro" , 7000],
    ["Platina" , 8000],
    ["Ascendente" , 9000],
    ["Imortal" , 10000],
];

// Valor padrão quando o nível declarado não estiver dentro da matriz
let nivel = "Radiante";

// Atribui o nome do nível e o limite de XP da matriz 'niveis' às variáveis correspondentes
for (let i = 0; i < niveis.length; i++) {
    const nomeNivel = niveis[i][0];
    const limiteXP = niveis[i][1];

    // Quando encontramos o nível adequado, podemos sair do loop
    if (xp <= limiteXP) {
        nivel = nomeNivel;
        break;
    }
}

// Resultado final
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);