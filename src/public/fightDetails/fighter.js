"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var Fighter = /** @class */ (function () {
    function Fighter(name, health, power) {
        this.knockout = function () {
            return new es6_promise_1.Promise(function (resolve) {
                setTimeout(function () { console.log("Time is over"); resolve(2); }, 5000);
            });
        };
        this.name = name;
        this.health = health;
        this.power = power;
    }
    Fighter.prototype.hit = function (enemy, point) {
        var demage = point * this.power;
        enemy.setDemage(demage);
    };
    Fighter.prototype.setDemage = function (demage) {
        this.health -= demage;
        console.log(this.name + "'s health - " + this.health);
    };
    return Fighter;
}());
exports.Fighter = Fighter;
