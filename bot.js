// Spybot v1
// By samonyt#0001
// Change token, channelID and keywords to your liking
// Enjoy!

const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', async() => { 
    console.log(`Logged in as: ${client.user.tag}!`)
    console.log(`Ready to spy on: ${client.guilds.size} server(s) and ${client.users.size} user(s)!`)
    console.log(`Invite me to a server using: https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=8`)
    console.log(`If I'm a selfbot, invite me using a discord.gg invite!`)
})

client.on('message', async(msg) => {
    const ch = client.channels.get('') // Paste your channel ID here!
    const keywords = [] // for example: ['hi', 'hello', 'bye']
    const arr = msg.content.split(' ').map(w => w.toLowerCase()).filter(w => keywords.includes(w));
    if (msg.author.id == client.user.id) return;
    if (msg.content === 0) return;
    console.log(`${msg.guild.name} - ${msg.author.tag}: ${msg.content}`)
    if (arr.length !== 0) {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`)
        .setDescription(`${msg.content}`)
        .setFooter(`${msg.guild.name} | SpyBot v1`)
        .setColor(0xFF0000)
        ch.send(embed).then(ch.send('@everyone Alert! A keyword has been mentioned!'))
    } else {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL()}`)
        .setDescription(`${msg.content}`)
        .setFooter(`${msg.guild.name} | SpyBot v1`)
        .setColor(0x33FF33)
        ch.send(embed)
    }
})
client.login('') // Place your token here