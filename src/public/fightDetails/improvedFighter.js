"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fighter_1 = require("./fighter");
var ImprovedFighter = /** @class */ (function (_super) {
    __extends(ImprovedFighter, _super);
    function ImprovedFighter(name, health, power) {
        return _super.call(this, name, health, power) || this;
    }
    ImprovedFighter.prototype.hit = function (enemy, point) {
        this._dobleHit(enemy, point);
    };
    ImprovedFighter.prototype._dobleHit = function (enemy, point) {
        console.log("dobleHit");
        _super.prototype.hit.call(this, enemy, point * 2);
    };
    return ImprovedFighter;
}(fighter_1.Fighter));
exports.ImprovedFighter = ImprovedFighter;
