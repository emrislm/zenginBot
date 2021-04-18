//var servers = {};

module.exports = {
    name: 'kapat',
    description: 'soort van een stop',
    execute(message, args) {
        var server = servers[message.guild.id];
        if(message.guild.voice != undefined) {
            if(message.guild.voice.connection) {
                for (var i = server.queue.length -1; i >= 0; i--) {
                    server.queue.splice(i, 1);
                }
                server.dispatcher.end();
                console.log('kapattin');
            }
            if(message.guild.connection) message.guild.voice.connection.disconnect();
        }
    }
}
