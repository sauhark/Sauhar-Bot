const Discord =require('discord.js')
const bot = new Discord.Client();



bot.on('ready',() =>{
    console.log("This bot is online!")
})
bot.on('message',(message)=>{
    var mentionedUserId = message.mentions.users.first().id;
    if (mentionedUserId == 460412608844005396) {

        var reply;
        console.log(message.content);
              if (message.content.includes("pubg")) {
            //reading json file

            console.log("pubg text found in message");
            reply = ' :wave: Hi this is me Sauhar Bot. Your message has been send to Lapzap, wait for reply. Have nice day';
        } else {
            reply = "Hi this is me Sauhar Bot.Please leave your message";
        }
        message.reply(reply)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .catch(console.error);

    }
})


bot.login(process.env.BOT_TOKEN);
