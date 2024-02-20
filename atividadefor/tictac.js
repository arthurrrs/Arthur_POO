function contagemRegressiva(segundos) {
    for (var i = segundos; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log("Tic");
        }
        else {
            console.log("Tac");
        }
        if (i > 0) {
            console.log("(".concat(i, " segundos restantes)"));
        }
        setTimeout(function () { }, 1000);
    }
    console.log("Tempo esgotado!");
}
contagemRegressiva(10);
