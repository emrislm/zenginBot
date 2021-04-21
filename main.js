const Discord = require('discord.js');
const fs = require('fs');
const ytdl = require('ytdl-core');

// own bot lol
const client = new Discord.Client();
const prefix = '--';
var servers = {};

client.commands = new Discord.Collection();

//external commands from file
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//belangrijk
const general_TCid = "825730180110221364";
const doremifdasol_TCid = "828628847741501491";
const botdinges_TCid = "832146225427513406";
const general_VCid = "825730180110221365";
const guildID = "825730179632463874";

const zengin = "https://youtu.be/6MJF0UoVZpw";
const caniminIci = "https://youtu.be/HJu3TltNRHk";
const salak = "https://youtu.be/15S_g5aqLjs";
const opimmi = "https://youtu.be/wE95R75FNlM";

client.once('ready', () => {
    console.log('bot is readyboi');
});

client.on('voiceStateUpdate', (oldState, newState) => {
    let newUserChannel = newState.channelID;
    let oldUserChannel = oldState.channelID;
    const voiceChannel = client.channels.cache.get(general_VCid);

    var server = servers[guildID];

    if(newUserChannel === general_VCid) { 
        voiceChannel.join().then(connection => {
            server.dispatcher = connection.play("./audio/selamuneleykum.mp3");
        }).catch(e => { console.error(e); });

        console.log(newState.member.user.username + " joined");
    } else {
        voiceChannel.join().then(connection => {
            server.dispatcher = connection.play("./audio/mardatoniTefankardo.mp3");
        }).catch(e => { console.error(e); });
        
        console.log(newState.member.user.username + " left");
    }
});

client.on('message', message => {
    if ((!message.content.startsWith(prefix)) || (message.author.bot)) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if(command === 'esistmiamiyacine') {
        client.commands.get('esistmiamiyacine').execute(message, args);
    } else if(command === 'aloow') {
        client.commands.get('aloow').execute(message, args);
    }
});

client.on("typingStart", (channel, user) => {
    channel.send(`${user.username} has started typing`);
});
client.on("typingStop", (channel, user) => {
    channel.send(`${user.username} has stopped typing`);
});

client.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) {
        return;
    }

    channel.send(`Selamunaleykum ${member.user.username} yavsagim.`);
});

client.login(process.env.BOTTOKEN);
