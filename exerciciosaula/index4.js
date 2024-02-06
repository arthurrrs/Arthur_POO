"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = 10;
        this.saude = 100;
    }
    Guerreiro.prototype.atacar = function (monstro) {
        monstro.saude -= this.forca;
        console.log("".concat(this.nome, " atacou ").concat(monstro.nome, " e causou ").concat(this.forca, " de dano!"));
    };
    Guerreiro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano!"));
    };
    Guerreiro.prototype.estaVivo = function () {
        return this.saude > 0;
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacar = function (guerreiro) {
        guerreiro.saude -= this.forca;
        console.log("".concat(this.nome, " atacou ").concat(guerreiro.nome, " e causou ").concat(this.forca, " de dano!"));
    };
    Monstro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano!"));
    };
    Monstro.prototype.estaVivo = function () {
        return this.saude > 0;
    };
    return Monstro;
}());
exports.Monstro = Monstro;
