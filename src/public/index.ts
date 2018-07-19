import { Fighter } from './fightDetails/fighter';
import {fight} from "./fightDetails/fight";
import { ImprovedFighter } from './fightDetails/improvedFighter';

const f1 = new ImprovedFighter("Jeck", 1000, 5);
const f2 = new Fighter("Bob", 1000, 7);
fight(f1, f2, 25);