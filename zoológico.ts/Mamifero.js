"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
var Animal_1 = require("./Animal");
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero(nome, idade, pelagem) {
        var _this = _super.call(this, nome, idade) || this;
        _this._pelagem = pelagem;
        return _this;
    }
    Object.defineProperty(Mamifero.prototype, "pelagem", {
        get: function () {
            return this._pelagem;
        },
        set: function (pelagem) {
            this._pelagem = pelagem;
        },
        enumerable: false,
        configurable: true
    });
    Mamifero.prototype.breastfeed = function () {
        console.log("**".concat(this.nome, " est\u00E1 amamentando**"));
    };
    return Mamifero;
}(Animal_1.Animal));
exports.Mamifero = Mamifero;
