# ⚔️ CLI Text-Based Adventure Game

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

## 🚀 How to Run & Use

1. Clone or download this repository locally.
2. Open your terminal in the project folder and install the required packages:
   ```bash
   npm install

3. Launch the game using the following command:

```bash
npx tsc && node index.js
