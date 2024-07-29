const mineflayer = require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder
const Movements = require('mineflayer-pathfinder').Movements


const { follow, come } = require('./function.js')

var bot = mineflayer.createBot({
    host: 'localhost', // minecraft server ip
    username: 'Astoria', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
    auth: 'offline', // for offline mode servers, you can set this to 'offline'
    port: 12345,  // set if you need a port that isn't 25565
   
  });

bot.loadPlugin(pathfinder)

bot.once('spawn', () => {
  const defaultMove = new Movements(bot)
  
  bot.on('chat', function(username, message) {

    bot.skinData = {
        url: 'assets/bot-skin.png',
        model: 'slim' // or 'classic'
      };
  
    if (username === bot.username) return
    
    const target = bot.players[username] ? bot.players[username].entity : null
    if (message === 'come') {
        if (!target) {
            bot.chat('I don\'t see you !')
            return
          }
        come(bot, target, defaultMove);
    }
    
    // if (message === 'follow') {
    //     if (!target) {
    //       bot.chat('I don\'t see you !')
    //       return
    //     }

    //    come(bot, target);
    //    come(bot, target);
    //    come(bot, target);
    //    come(bot, target);
    
      
    //   } 
  })
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)