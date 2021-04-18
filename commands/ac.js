const ytdl = require('ytdl-core');

//var servers = {};

module.exports = {
    name: 'ac',
    description: 'acccccccc',
    execute(message, args) {
        if (!args[0]) {
            message.channel.send('provide een link salak cocuk!');
            return;
        } else if(!message.member.voice.channel) {
            message.channel.send("Salak cocuk NERDESIN? VOICE'A GEL");
            return;
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];
        server.queue.push(args[0]);
        if(message.guild.voice === undefined || !message.guild.voice.connection) message.member.voice.channel.join().then((connection) => {
            MyPlay(connection, message);
        });
    }
}

function MyPlay(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("finish", () => {
        if (server.queue[0]) {
            MyPlay(connection, message);
        } 
        else {
            connection.disconnect();
        }
    });
}