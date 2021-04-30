module.exports = {
    name: 'kahin',
    description: 'sen kahinmisin?',
    execute(message, args, servers) {
        if(!message.member.voice.channel) {
            message.channel.send("Salak cocuk NERDESIN? VOICE'A GEL");
            return;
        }

        var server = servers[message.guild.id];
        if(message.guild.voice === undefined || !message.guild.voice.connection) {
            message.member.voice.channel.join().then((connection) => {
                message.channel.send('Basladi');

                server.dispatcher.on("finish", () => {
                    if (server.queue[0]) {
                        MyPlay(connection, message);
                    } 
                    else {
                        connection.disconnect();
                    }
                });
                

                message.channel.send('Bitti');
                message.guild.voice.connection.disconnect();
            });
        }
    }
}