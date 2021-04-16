const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'youtube icin bu',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Voice'a girsene ibene!");
        if(!args.length) return message.channel.send("Bise yazsana salak!");

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(" "));
        if(video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek:0, volume: 1});

            await message.reply(`:thumbup: Ne dinliyoruz?? ***${video.title}***`);
        }
        else {
            message.channel.send("Niks gevonden jng...");
        }
    }
}