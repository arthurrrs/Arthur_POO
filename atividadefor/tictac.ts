function contagemRegressiva(segundos: number): void {
    for (let i = segundos; i >= 0; i--) {
      if (i % 2 === 0) {
        console.log("Tic");
      } else {
        console.log("Tac");
      }
  
      if (i > 0) {
        console.log(`(${i} segundos restantes)`);
      }
  
      setTimeout(() => {}, 1000);
    }
  
    console.log("Tempo esgotado!");
  }
  
  contagemRegressiva(10);

  