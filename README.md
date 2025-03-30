## Drift Orbital  
Drift Orbital is a unique space-themed survival game built with HTML, CSS, and JavaScript. You control a small spaceship orbiting a planet, avoiding asteroids while collecting energy orbs to boost your score. The catch? Your orbit naturally decays, forcing you to strategically boost away from the planet without drifting into danger. How long can you survive?

## Preview 
![image](https://github.com/user-attachments/assets/6752fbfb-6e71-4209-ae8a-d1fb411bc5bd)

## Features  
- Orbital Mechanics: Your ship orbits a central planet, with a decaying orbit adding constant tension.  
- Dynamic Obstacles: Avoid randomly spawned asteroids that threaten your survival.  
- Score System: Collect green energy orbs to increase your score by 10 points each.  
- Simple Controls: Use the Spacebar to boost your ship outward.  
- Minimalist Design: Clean visuals with a retro space aesthetic.  

## Demo  
- Start the game, maneuver your yellow ship around the blue planet, dodge gray asteroids, and collect green orbs.  
- Watch your score climb until you crash into the planet or an asteroid ends your run!  

## Prerequisites  
- A modern web browser (e.g., Chrome, Firefox, Edge).  
- No additional software or servers required—just open the HTML file!  

## Installation  
- Clone or Download:  
    - Download the project files: `index.html`, `styles.css`, `script.js`, and this `README.md`.  
    - Alternatively, clone the repository if hosted on a platform like GitHub.  
- Project Structure:  
    ```
    Orbital-Drift/
    ├── index.html      # Main HTML structure
    ├── styles.css      # Styling for the game
    ├── script.js       # Game logic and mechanics
    └── README.md       # This file
    ```
- Run:  
    - Open `index.html` in a web browser.  
    - You can double-click the file or use a local server (e.g., live-server in VS Code) for a smoother experience.  

## How to Play  
- Start the Game:  
    - Click the "Start Game" button (or "Restart Game" after a game over).  
- Controls:  
    - Press Spacebar to boost your ship away from the planet.  
- Objective:  
    - Survive: Avoid gray asteroids and don’t let your orbit decay into the blue planet.  
    - Score: Collect green energy orbs to earn 10 points each.  
- Game Over:  
    - Colliding with an asteroid or the planet ends the game.  
    - Your final score displays, and you can restart.  

## Example Gameplay  
- Boost to grab an orb (+10 points), then let your orbit decay slightly to dodge an asteroid.  
- Repeat until you misjudge a move and crash—aim for a high score!  

## Limitations  
- Single-Player Only: No multiplayer or leaderboards (yet!).  
- Basic Collision: Simple circular hitboxes for asteroids and orbs.  
- No Persistence: Score resets each game and isn’t saved.  

## Potential Enhancements  
- Sound Effects: Add audio for boosts, orb collection, and collisions using the Web Audio API.  
- Levels: Increase asteroid spawn rate or orbit decay speed over time.  
- Fuel Mechanic: Limit boosts with a depleting fuel bar.  
- Visual Upgrades: Add particle effects for crashes or orbiting trails.  
- Leaderboard: Store high scores in `localStorage` or a backend database.  

## Technologies Used  
- HTML5: Canvas for rendering the game and basic structure.  
- CSS3: Styling for a sleek, space-inspired look.  
- JavaScript: Game logic, animation with `requestAnimationFrame`, and event handling.  

## Contributing  
- Feel free to fork this project, submit pull requests, or suggest improvements!  
- Ideas for new mechanics, better visuals, or bug fixes are welcome.  

## License  
- This project is open-source and available under the MIT License.  
