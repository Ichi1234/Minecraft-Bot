const pathfinder = require('mineflayer-pathfinder').pathfinder;
const Movements = require('mineflayer-pathfinder').Movements;
const { GoalNear } = require('mineflayer-pathfinder').goals;

class Pathfinding {
  constructor(target_bot) {
    this.bot = target_bot;
    this.bot.loadPlugin(pathfinder);  // Load pathfinder plugin
  }

  come(target_user) {
    if (!target_user) {
      this.bot.chat('I don\'t see you!');
      return;
    }
    const pos = target_user.position;
    const defaultMove = new Movements(this.bot);

    this.bot.pathfinder.setMovements(defaultMove);
    this.bot.pathfinder.setGoal(new GoalNear(pos.x, pos.y, pos.z, 1));
  }

  // Additional methods like follow can be added here
}

module.exports = Pathfinding;
