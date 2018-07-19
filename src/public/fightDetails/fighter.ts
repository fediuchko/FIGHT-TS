import {Promise} from 'es6-promise'

export interface IFighter {
    name: string;
    power: number;
    health: number;
   knockout: () => void;
    hit: (enemy: IFighter, point: number) => void;
    setDemage: (demage: number) => void;
}

export class Fighter implements IFighter {
    name: string;
    power: number;
    health: number;

    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

   knockout = (): Promise<number> => {
        return new Promise<number>((resolve) => {
            setTimeout(() => { console.log("Time is over"); resolve(2) }, 5000)
        });
    };

   hit(enemy: IFighter, point: number) {
        let demage = point * this.power;
        enemy.setDemage(demage);
    }
   setDemage(demage: number) {
        this.health -= demage;
        console.log(this.name+"'s health - "+this.health);
    }
}
