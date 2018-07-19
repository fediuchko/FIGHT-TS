You have to create game “Fight”. There will be two types of fighters: fighter and improved fighter.

Create class “Fighter” with such properties as name, health and power. These parameters should be set in constructor. Also, class ”Fighter” should contain such methods as “setDamage”, “hit“ and “knockout”.

Method setDamage has parameter “damage” and this method sets damage to fighter via changing health property (health = health - damage) and print value health to console.

Method “hit” has parameters “enemy“, “point” and call the method of the “enemy.setDamage(damage)”. "damage” calculates as point * power, where point is a parameter from function “fight” and power is a property of the fighter who makes damage.

Method “knockout” returns promise that has been resolved after half second (use setTimeout function inside promise) and prints to console the message “time is over” before promise had been resolved.

Create class ImprovedFighter that inherits methods and properties from class Fighter.

For this class, create method “doubleHit” that calls inherit “hit” method and passes there a double point.

For each class, create two instances - fighter and improvedFighter

Create async function ”fight” with such parameters as fighter, improvedFighter and points.

This function should start the game and may have different number of parameters. For example, fight (fighter, improvedFighter, 25, 13, 45), where point = [25, 13, 45]. Players hit each other one by one with method “hit” which takes a point as an argument. If one of the players has less health then 0, you print to console that user in knockout and call “knockout” method. You should wait until promise is resolved and print to console the result of the fight.


При виконанні домашнього завдання можете використати готові налаштування для проекту, але розширте їх. Можна добавити валідацію на використання локальних змінних та параметрів (в tsconfig.json). Також при виконані завдання використайте модифікатори доступу, інтерфейси, приведення типів. Компіляція повинна проходити без помилок.

В якості основи скористайтесь прикладом з налаштованою інфраструктурою та готовим конфігом webpack. Лінк https://github.com/sahanr/ts-bsa-2017 на репозиторій.
