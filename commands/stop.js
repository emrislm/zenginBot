module.exports = {
    name: 'stop',
    description: 'stop',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send("Voice'a girsene ibene!");

        await voiceChannel.leave();
        await message.channel.send("niye durdun it???!!! :smiling_face_with_tear:");
    }
}