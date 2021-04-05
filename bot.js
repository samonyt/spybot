// Spybot v1
// By Sam#5281
// Change token, channelID and keywords to your liking
// Enjoy!

// Configurable Options
const token = ""; // put your bot token between the quotes
const keywords = [];
const channelID = ""; // put your log channel id between the quotes

const Discord = require('discord.js'); // Discord var created using the discord.js library in NodeJS
const client = new Discord.Client(); // client var created as the discord.js.client function

client.on('ready', async() => { // when bot ready
    
    console.log(`Logged in as: ${client.user.tag}!`); // send in the console the bot tag ( bot name + bot # )
    console.log(`Ready to spy on: ${client.guilds.size} server(s) and ${client.users.size} user(s)!`); // send in the console the number of servers and users the bot will spy
    console.log(`Invite me to a server using: https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=8`); // send in the console the bot invitation link
    console.log(`If I'm a selfbot, invite me using a discord.gg invite!`);
    
});

client.on('message', async(msg) => {
    
    const ch = client.channels.get(channelID); // set your log channel id between the quotes
    const arr = msg.content.split(' ').map(w => w.toLowerCase()).filter(w => keywords.includes(w)); // copy the message of the peoples
    if (msg.author.id == client.user.id) return; // if the author of the message is the bot, then nothing is done
    if (msg.content === 0) return; // if the message contains nothing
    console.log(`${msg.guild.name} - ${msg.author.tag}: ${msg.content}`); // send in the console the server name, author tag and the content of a message
    if (arr.length !== 0) { // if the message size is not equal to 0
        
        let embed = new Discord.MessageEmbed(); // create a new embed
        embed.setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`); // set the embed author as the message author tag and embed author avatar as the message author avatar
        embed.setDescription(`${msg.content}`); // set the embed description as the message content
        embed.setFooter(`${msg.guild.name} | SpyBot v1`); // set the embed footer as the server name + Spybot v1
        embed.setColor(0xFF0000); // set the embed color as FF 00 00
        ch.send(embed).then(ch.send('@everyone Alert! A keyword has been mentioned!')); // send in the log channel the embed and send a ping to all peoples
        
    } else {
        
        let embed = new Discord.MessageEmbed(); // create a new embed
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`); // set the embed author as the message author tag and the embed author avatar as the message author avatar
        .setDescription(`${msg.content}`); // set the embed description as the message content
        .setFooter(`${msg.guild.name} | SpyBot v1`); // set the footer as the server name + SpyBot v1
        .setColor(0x33FF33); // set the embed color as 33 FF 33
        ch.send(embed); // send in the log channel the embed
        
    };
    
});

client.login(token); // the bot is loging with the token
