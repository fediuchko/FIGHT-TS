"use strict";
exports.__esModule = true;
var improvedFighter_1 = require("./improvedFighter");
exports.fight = function (fighter1, fighter2, points) {
    var k = 0;
    while (fighter1.health >= 0 && fighter2.health >= 0) {
        if (k % 2 !== 0) {
            console.log(fighter1.name + "'s hit ");
            fighter1.hit(fighter2, points);
        }
        else {
            console.log(fighter2.name + "'s hit ");
            fighter2.hit(fighter1, points);
        }
        k++;
    }
    var looser;
    if (fighter1.health < 0) {
        looser = fighter1;
    }
    else {
        looser = fighter2;
    }
    try {
        // Приведення типів (для прикладу):
        if (looser instanceof improvedFighter_1.ImprovedFighter) {
            console.log(looser.name + " is fighter of type ImprovedFighter");
        }
        else {
            console.log(looser.name + " is fighter of type Fighter");
        }
        looser.knockout();
    }
    catch (error) {
        console.log(error);
    }
};
