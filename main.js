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

client.once('ready', () => {
    console.log('bot is readyboi');
});

client.on('voiceStateUpdate', (oldState, newState) => {
    // MN EIGEN SERVER DATA
    //general:          825730180110221364
    //do-re-mi-fa-sol:  828628847741501491
    //bot-dinges:       832146225427513406
    //general voice:    825730180110221365
    //message.guild.id: 825730179632463874
    const general_TCid = "825730180110221364";
    const doremifdasol_TCid = "828628847741501491";
    const botdinges_TCid = "832146225427513406";
    const general_VCid = "825730180110221365";
    const guildID = "825730179632463874";

    let newUserChannel = newState.channelID;
    let oldUserChannel = oldState.channelID;
    const voiceChannel_general = client.channels.cache.get(general_VCid);

    const zengin = "https://youtu.be/6MJF0UoVZpw";
    const caniminIci = "https://youtu.be/HJu3TltNRHk";
    const salak = "https://youtu.be/15S_g5aqLjs";
    const opimmi = "https://youtu.be/wE95R75FNlM";

    var server = servers[guildID];

    if(newUserChannel === general_VCid) { 
        if (newState.member.user.username === "Itseiji") {
            //oldState.guild.channels.cache.get(botdinges_TCid).send("Yavsak (Itseiji) joined voice");
            voiceChannel_general.join().then(connection => {
                console.log("BOT Successfully connected.");
                server.dispatcher = connection.play(ytdl(opimmi, {filter: "audioonly"}));
            }).catch(e => { console.error(e); });
        } else if (newState.member.user.username === "Eternal") {
            //oldState.guild.channels.cache.get(botdinges_TCid).send("Salak (Eternal) joined voice");
            voiceChannel_general.join().then(connection => {
                console.log("BOT Successfully connected.");
                server.dispatcher = connection.play(ytdl(opimmi, {filter: "audioonly"}));
            }).catch(e => { console.error(e); });
        } else if (newState.member.user.username === "Tahir") {
            //oldState.guild.channels.cache.get(botdinges_TCid).send("Canimin ici (Tahir) joined voice");
            voiceChannel_general.join().then(connection => {
                console.log("BOT Successfully connected.");
                server.dispatcher = connection.play(ytdl(opimmi, {filter: "audioonly"}));
            }).catch(e => { console.error(e); });
        }

        console.log(newState.member.user.username + " joined");
    }
    else {
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
    //else if(command === 'ac') {
    //     client.commands.get('ac').execute(message, args, servers);
    // } else if(command === 'gec') {
    //     client.commands.get('gec').execute(message, args, servers);
    // } else if(command === 'kapat') {
    //     client.commands.get('kapat').execute(message, args, servers);
    // } else if(command === 'play') {
    //     client.commands.get('play').execute(message, args);
    // } else if(command === 'stop') {
    //     client.commands.get('stop').execute(message, args);
    // }
});

client.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) {
        console.log("bestaat niet");
        return;
    }

    console.log("bestaat");
    channel.send(`Selamunaleykum yavsak ${member}.`);
});

// client.login(process.env.BOTTOKEN);
client.login("ODMyMTkzNTEwMjM2MzU2NjIw.YHgOmg.4jD51aeAyji0AXYVKlBVwf4mMKs");

