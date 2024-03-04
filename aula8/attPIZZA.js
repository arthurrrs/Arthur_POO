var SaborPizza;
(function (SaborPizza) {
    SaborPizza[SaborPizza["Calabresa"] = 0] = "Calabresa";
    SaborPizza[SaborPizza["QuatroQueijos"] = 1] = "QuatroQueijos";
    SaborPizza[SaborPizza["FrangoCatupiry"] = 2] = "FrangoCatupiry";
    SaborPizza[SaborPizza["Marguerita"] = 3] = "Marguerita";
    SaborPizza[SaborPizza["Portuguesa"] = 4] = "Portuguesa";
})(SaborPizza || (SaborPizza = {}));
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    Pizza.prototype.descrição = function () {
        return "Pizza ".concat(this.sabor, ", Tamanho: ").concat(this.tamanho, ", Preco: R$ ").concat(this.preco);
    };
    return Pizza;
}());
var pizzaCalabresa = new Pizza(SaborPizza.Calabresa, "Grande", 40);
var pizzaQuatroQueijos = new Pizza(SaborPizza.QuatroQueijos, "Média", 35);
var pizzaFrangoCatupiry = new Pizza(SaborPizza.FrangoCatupiry, "Pequena", 25);
console.log(pizzaCalabresa.descrição());
console.log(pizzaQuatroQueijos.descrição());
console.log(pizzaFrangoCatupiry.descrição());
