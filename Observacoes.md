# Observações sobre o desafio "Classificador de Nível de Herói"

## 1
Na estrutura de decisão, há uma parte que deixa em dúvida como decidir o nível:

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze

Veja que o valor das vitórias 10 ficou sem um retorno, pois a categoria Ferro só aceita números de 0 a 9 (menor que 10)
Veja também que a categoria Bronze só aceita valores de 11 a 20

Nesse caso, para concluir o desafio, eu tomei a decisão de colocar a categoria Ferro de 0 a 10, atualizando o texto para o seguinte:

Se vitórias for menor ou igual a 10 = Ferro

Isso corrigiu o problema, e com isso, eu pude prosseguir com a solução do desafio.