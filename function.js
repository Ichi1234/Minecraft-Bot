
const { GoalNear } = require('mineflayer-pathfinder').goals

// function follow(current_bot, who) {

// }

function come(current_bot, who, default_move) {

    if (!who) {
        current_bot.chat('I don\'t see you !')
        return
      }
      const p = who.position

      current_bot.pathfinder.setMovements(default_move)
      current_bot.pathfinder.setGoal(new GoalNear(p.x, p.y, p.z, 1))
}

module.exports = {
    // follow,
    come,
};