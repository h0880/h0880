console.log("Logging Bot into Discord");

require("dotenv").config();

const { client, Intents } = require('discord.js');

// not a good idea to enable all intents as below

//const client = new Discord.Client({ intents: 32767 });

const client = new Discord.Client({ intents: [
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  Intents.FLAGS.GUILD_MEMBERS]});

client.login(process.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("Bot logged into Discord");
}

const replies = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes Definitely",
    "You may rely on it",
    "As i see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try agin",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Dont count on it",
    "My sources say no",
    "Outlook not so good",
    "Very doubtfull",
    "My reply is no"
]

client.on("messageCreate", gotMessage);

function gotMessage(msg) { 

  if (msg.author.bot) return

  if (msg.channel.id == "869551563511848970") {

const index = Math.floor(Math.random() * replies.length);

msg.channel.send(replies[index]);

console.log(msg.content);
console.log(replies[index]);

//msg.reply(replies[index]);

}
} 