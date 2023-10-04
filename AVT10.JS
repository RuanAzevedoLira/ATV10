function isMagicSquare(matrix) {
    // Verifica se a matriz é quadrada
    const n = matrix.length;
    if (matrix.some(row => row.length !== n)) {
      return false;
    }
  
    // Calcula a soma mágica
    const magicSum = (n * (n * n + 1)) / 2;
  
    // Verifica a soma das linhas e colunas
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += matrix[i][j];
        colSum += matrix[j][i];
      }
      if (rowSum !== magicSum || colSum !== magicSum) {
        return false;
      }
    }
  
    // Verifica a soma das diagonais
    let diag1Sum = 0;
    let diag2Sum = 0;
    for (let i = 0; i < n; i++) {
      diag1Sum += matrix[i][i];
      diag2Sum += matrix[i][n - 1 - i];
    }
  
    if (diag1Sum !== magicSum || diag2Sum !== magicSum) {
      return false;
    }
  
    // Se todas as verificações passaram, é um Quadrado Mágico
    return true;
  }
  
  // Exemplo de uso
  const matriz = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  const resultado = isMagicSquare(matriz);
  console.log(resultado); // Deve retornar true para este exemplo
  