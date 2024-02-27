interface Aluno {
    nome: string;
    notas: Record<string, number>;
  }
  
  const calcularMedia = (aluno: Aluno): number => {
    const notas = Object.values(aluno.notas);
    const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
    return somaNotas / notas.length;
  };
  
  const aluno: Aluno = {
    nome: "João Silva",
    notas: {
      Matemática: 8,
      Português: 7,
      História: 9,
    },
  };
  
  const media = calcularMedia(aluno);
  console.log(`A média do aluno ${aluno.nome} é: ${media}`);
  
  
  