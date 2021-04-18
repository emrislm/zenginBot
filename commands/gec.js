//var servers = {};

module.exports = {
    name: 'gec',
    description: 'soort van een skip',
    execute(message, args) {
        var server = servers[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
    }
}
