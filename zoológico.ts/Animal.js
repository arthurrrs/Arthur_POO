"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(Animal.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.emitSound = function () {
        console.log("**Som genérico de animal**");
    };
    return Animal;
}());
exports.Animal = Animal;
