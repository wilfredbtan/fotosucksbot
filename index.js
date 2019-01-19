const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.token);
bot.start((ctx) => ctx.reply('Send foto plz!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('photo', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

function randomCaption() {
  if (Math.random() < 0.8) {
    return "Your photo sucks! 😡 👎";
  } else {
    return "It's ok la 🙂";
  }
}

console.log(randomCaption());

bot.on('photo', ({message, replyWithPhoto}) => replyWithPhoto(message.photo.pop().file_id, {caption: randomCaption()}));
bot.launch();
