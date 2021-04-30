module.exports = {
    name: 'embed',
    description: 'embed haha',
    execute(message, args, Discord) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#' + randomColor)
        .setTitle('Click Me!!')
        .setURL('https://pnrtscr.com/kqrkc7')
        //.setDescription('Een test embed for dev purposes')
        // .addFields(
        //     {name: 'Iets 1', value: 'Be nice'},
        //     {name: 'Iets 2', value: 'Be bad'},
        //     {name: 'Iets 3', value: 'Be neutral'}
        // )
        //.setImage('https://picsum.photos/300')
        //.setAuthor(message.author.username, message.author.avatarURL())
        //.setThumbnail('https://picsum.photos/150')
        //.setTimestamp()
        //.setFooter('Make sure to eat LOTS of kebab');

        message.channel.send(newEmbed);
    }
}