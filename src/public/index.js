"use strict";
exports.__esModule = true;
var fighter_1 = require("./fightDetails/fighter");
var fight_1 = require("./fightDetails/fight");
var improvedFighter_1 = require("./fightDetails/improvedFighter");
var f1 = new improvedFighter_1.ImprovedFighter("Jeck", 1000, 5);
var f2 = new fighter_1.Fighter("Bob", 1000, 7);
fight_1.fight(f1, f2, 25);
