enum SaborPizza { //O enum SaborPizza define os sabores disponíveis de pizzas.
    Calabresa,
    QuatroQueijos,
    FrangoCatupiry,
    Marguerita,
    Portuguesa
  }

  class Pizza {  // a classe Pizza possui os parâmetros sabor, tamanho e preço.
    constructor(
      public readonly sabor: SaborPizza, // public readonly indica que o valor do membro só pode ser atribuído uma vez
      public readonly tamanho: string,
      public readonly preco: number
    ) {}
  
    descrição(): string { // método descrição retorna uma string contendo a descrição da pizza.
      return `Pizza ${this.sabor}, Tamanho: ${this.tamanho}, Preco: R$ ${this.preco}`;
    }
  }
  
  const pizzaCalabresa = new Pizza(SaborPizza.Calabresa, "Grande", 40);
  const pizzaQuatroQueijos = new Pizza(SaborPizza.QuatroQueijos, "Média", 35);
  const pizzaFrangoCatupiry = new Pizza(SaborPizza.FrangoCatupiry, "Pequena", 25);
  
  console.log(pizzaCalabresa.descrição());
  console.log(pizzaQuatroQueijos.descrição());
  console.log(pizzaFrangoCatupiry.descrição());
  
  
  