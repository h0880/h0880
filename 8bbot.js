console.log("Logging Bot into Discord");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

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

client.on("message", gotMessage);

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