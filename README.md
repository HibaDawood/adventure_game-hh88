# ⚔️ CLI Text-Based Adventure Game
[![npm version](https://img.shields.io/npm/v/adventure_game-hh88.svg?style=flat-square)](https://www.npmjs.com/package/adventure_game-hh88)

An interactive, command-line role-playing game (RPG) built with TypeScript and Node.js using Object-Oriented Programming (OOP) principles. Players battle against different mythical opponents in a turn-based survival match.

---

## ✨ Features

* **Character Customization:** Allows players to input their custom name and choose from three unique opponents: Skeleton, Zombie, or Assassin.
* **Dynamic Turn-Based Combat:** Uses a randomized luck factor (`Math.random()`) to determine whether the player or the opponent takes damage during an attack.
* **In-Game Mechanics:**
  * **Attack:** Engages the enemy, decreasing fuel (health) by 25 points based on combat outcomes.
  * **Drink Potion:** Restores the player's fuel back to 100% instantly.
  * **Run:** Permits tactical retreats to end the game immediately.
* **Vibrant Visual Feedback:** Uses `chalk` to color-code health updates, winning achievements, and game-over states.

---

## 🛠️ Tech Stack

* **Language:** TypeScript / Node.js
* **Dependencies:** `inquirer` (Interactive CLI menus), `chalk` (Terminal text styling)

---
### 🚀 How to Run & Use

Run this application directly in your terminal using `npx` (No installation required):

```bash
npx adventure_game-hh88
