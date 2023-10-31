// Mensagem de apresentação do projeto
console.log("Seja bem-vindo (a) à Calculadora de Partidas Rankeadas!");
console.log("");

// Criação da função para calcular o rank
function calcularRank(numVitorias,numDerrotas){

	// Calculadora do saldo do jogador:
	let saldo = numVitorias - numDerrotas;

	// Matriz do ranking, onde cada submatriz contém [nome do 	rank, saldo de rankeadas]
	const ranks = [
    	["Ferro" , 10],
    	["Bronze" , 20],
    	["Prata" , 50],
    	["Ouro" , 80],
    	["Diamante" , 90],
    	["Lendário" , 100],
	];

	// Valor padrão quando o saldo declarado não estiver dentro da matriz
	let nomeRank = "Imortal";

	// Atribui o nome do reank e o limite de saldo da matriz 'ranks' às variáveis correspondentes
	for (let i = 0; i < ranks.length; i++) {
    	const nomeRankAtual = ranks[i][0];
    	const limiteSaldo = ranks[i][1];

    	// Quando encontramos o saldo adequado, podemos sair do loop
    	if (saldo <= limiteSaldo) {
        	nomeRank = nomeRankAtual;
        	break;
    	}
	}
	// Retornando os resultados
    return {saldo, nomeRank};
}

// Entrada do usuário, com os dados do jogador
let nicknameJogador = "Tonhão";
let numVitorias = 21;
let numDerrotas = 50;

// Chamando a função para informar o rank
let resultado = calcularRank(numVitorias,numDerrotas);

// Resultado final
console.log(`O jogador ${nicknameJogador} tem um herói com um saldo de ${resultado.saldo} vitórias está no nível de ${resultado.nomeRank}`);