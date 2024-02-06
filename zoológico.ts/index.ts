import { Mamifero } from "./Mamifero";
import { Ave } from "./Ave";

    const meuMamifero = new Mamifero("leao", 20, "branco");
    const papagaio = new Ave("loro", 2, "azul");

    console.log(`Nome do Papagaio: ${papagaio.nome}`);
    console.log(`Idade do Papagaio: ${papagaio.idade}`);
    console.log(`Envergadura do Papagaio: ${papagaio.envergadura}`);
    loro.emitSOund();
    loro.breastfeed();

    console.log(`Nome do Mamifero: ${leao.nome}`);
    console.log(`Idade do Mamifero: ${leao.idade}`);
    console.log(`Envergadura do Mamifero: ${leao.pelagem}`);
    leao.emitSound();
    leao.breastfeed();
