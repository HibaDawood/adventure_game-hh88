#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
}

async function main() {
  let playerName = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your name:",
  });

  console.log(playerName.name);

  let opponentName = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select your opponent:",
    choices: ["Skeleton", "Zoombie", "Assassin"],
  });

  let p1 = new Player(playerName.name);
  let o1 = new Opponent(opponentName.select);

  while (true) {
    if (opponentName.select === "Skeleton") {
      let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Please Select your action:",
        choices: ["Attack", "Drink portion", "Run for your life..."],
      });

      if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
          p1.fuelDecrease();
          console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
          console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
          if (p1.fuel <= 0) {
            console.log(
              chalk.bold.italic.red(`You lose, better luck next time.`)
            );
          }
        } else {
          o1.fuelDecrease();
          console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
          console.log(chalk.bold.magenta(`${o1.name} fuel is ${o1.fuel}`));
          if (o1.fuel <= 0) {
            console.log(chalk.bold.italic.cyanBright(`You Win.`));
            process.exit();
          }
        }
      }
      if (ask.opt === "Drink portion") {
        p1.fuelIncrease();
        console.log(
          chalk.bold.italic.green(
            `You Drink Health portion your fuel is ${p1.fuel}`
          )
        );
      }
      if (ask.opt === "Run for your life...") {
        console.log(
          chalk.bold.italic.red(`You lose, better luck next time.`)
        );
        break; // Exit the loop when the player chooses to run for their life
      }
    }
    if (opponentName.select === "Zoombie") {
      let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Please Select your action:",
        choices: ["Attack", "Drink portion", "Run for your life..."],
      });

      if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
          p1.fuelDecrease();
          console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
          console.log(chalk.bold.magenta(`${o1.name} fuel is ${o1.fuel}`));
          if (p1.fuel <= 0) {
            console.log(
              chalk.bold.italic.red(`You lose, better luck next time.`)
            );
          }
        } else {
          o1.fuelDecrease();
          console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
          console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
          if (o1.fuel <= 0) {
            console.log(chalk.bold.italic.cyanBright(`You Win.`));
            process.exit();
          }
        }
      }
      if (ask.opt === "Drink portion") {
        p1.fuelIncrease();
        console.log(
          chalk.bold.italic.green(
            `You Drink Health portion your fuel is ${p1.fuel}`
          )
        );
      }
      if (ask.opt === "Run for your life...") {
        console.log(
          chalk.bold.italic.red(`You lose, better luck next time.`)
        );
        break; // Exit the loop when the player chooses to run for their life
      }
    }
    if (opponentName.select === "Assassin") {
      let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Please Select your action:",
        choices: ["Attack", "Drink portion", "Run for your life..."],
      });

      if (ask.opt === "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
          p1.fuelDecrease();
          console.log(chalk.bold.magenta(`${p1.name} fuel is ${p1.fuel}`));
          console.log(chalk.bold.yellow(`${o1.name} fuel is ${o1.fuel}`));
          if (p1.fuel <= 0) {
            console.log(
              chalk.bold.italic.red(`You lose, better luck next time.`)
            );
          }
        } else {
          o1.fuelDecrease();
          console.log(chalk.bold.yellow(`${p1.name} fuel is ${p1.fuel}`));
          console.log(chalk.bold.magenta(`${o1.name} fuel is ${o1.fuel}`));
          if (o1.fuel <= 0) {
            console.log(chalk.bold.italic.cyanBright(`You Win.`));
            process.exit();
          }
        }
      }
      if (ask.opt === "Drink portion") {
        p1.fuelIncrease();
        console.log(
          chalk.bold.italic.green(
            `You Drink Health portion your fuel is ${p1.fuel}`
          )
        );
      }
      if (ask.opt === "Run for your life...") {
        console.log(
          chalk.bold.italic.red(`You lose, better luck next time.`)
        );
        break; // Exit the loop when the player chooses to run for their life
      }
    }
  }
}

main();
