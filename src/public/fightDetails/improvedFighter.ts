import { Fighter, IFighter } from "./fighter";

export class ImprovedFighter extends Fighter {
  constructor(name, health, power) {
    super(name, health, power)
  }
  hit(enemy: IFighter, point: number) {
    this._dobleHit(enemy, point)
  }
  private _dobleHit(enemy: IFighter, point: number) {
    console.log("dobleHit")
    super.hit(enemy, point * 2);
  }
}