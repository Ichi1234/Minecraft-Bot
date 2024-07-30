const pathfinder = require('mineflayer-pathfinder').pathfinder;
const Movements = require('mineflayer-pathfinder').Movements;
const { GoalNear, GoalFollow } = require('mineflayer-pathfinder').goals;

class Pathfinding {
  constructor(target_bot, minecraft_data) {
    this.bot = target_bot;
    this.bot.loadPlugin(pathfinder);  // Load pathfinder plugin
    this.mc_data =  minecraft_data;
}

  come(target_user) {
    if (!target_user) {
      this.bot.chat('I don\'t see you!');
      return;
    }
    const pos = target_user.position;
    const defaultMove = new Movements(this.bot);

    this.bot.pathfinder.setMovements(defaultMove);
    this.bot.pathfinder.setGoal(new GoalNear(pos.x, pos.y, pos.z, 1), true);
  }
  
  follow(name_of_user, msg) {

    if (msg === "stop") {
        this.bot.chat("Ok I will stop")
        this.bot.pathfinder.stop()
        return;
    }
    const movements = new Movements(this.bot, this.mc_data);
    this.bot.pathfinder.setMovements(movements)
    
    
    const playerCI = this.bot.players[name_of_user]
    const goals = new GoalFollow(playerCI.entity, 1)
    this.bot.pathfinder.setGoal(goals, true)
  }    
   
  
  // Additional methods like follow can be added here
}

module.exports = Pathfinding;
