const mineflayer = require('mineflayer')
const Pathfinding = require('./function.js');


const { follow, come } = require('./function.js')

var bot = mineflayer.createBot({
    host: 'localhost', // minecraft server ip
    username: 'Astoria', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
    auth: 'offline', // for offline mode servers, you can set this to 'offline'
    port: 12345,  // set if you need a port that isn't 25565
   
  });

// Create an instance of Pathfinding
const mcData = require('minecraft-data')(bot.version)
const pathfindingInstance = new Pathfinding(bot, mcData);

bot.once('spawn', () => {
  
  bot.chat("Hi ^-^")

  bot.on('chat', function(username, message) {
  
    if (username === bot.username) return
    
    const target = bot.players[username] ? bot.players[username].entity : null
    if (message === 'come') {
      pathfindingInstance.come(target)
    }

    if (message === 'follow' || message === 'stop') {
      bot.chat("Ok")
      pathfindingInstance.follow(username, message)
    }
    
 
  })
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)