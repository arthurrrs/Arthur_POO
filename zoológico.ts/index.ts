import { Mamifero } from "./Mamifero";
import { Ave } from "./Ave";

const meuMamifero = new Mamifero("leao", 20, "branco")
const papagaio = new Ave("Loro", 2, 1.2);

console.log(`Nome do Papagaio: ${papagaio.nome}`);
console.log(`Idade do Papagaio: ${papagaio.idade}`);
console.log(`Envergadura do Papagaio: ${papagaio.envergadura}`);


console.log(`Nome do Mamifero: ${Mamifero.nome}`);
console.log(`Idade do Mamifero: ${Mamifero.idade}`);
console.log(`Envergadura do Mamifero: ${Mamifero.envergadura}`);
console.log(`Som do Mamifero: ${Mamifero.emitSound()}`);
