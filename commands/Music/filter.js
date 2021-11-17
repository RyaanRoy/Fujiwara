const { MessageEmbed } = require("discord.js")
const { setFilter } = require('distube')

module.exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) {
        const filterError = new MessageEmbed()
            .setDescription("You Need to be in a Voice Channel to filter Music!")
            .setColor("RED")
        return message.channel.send(filterError)
    }
    if (!client.distube.isPlaying(message)) {
        const filterError2 = new MessageEmbed()
            .setDescription("There is Nothing Playing")
            .setColor("RED")
        return message.channel.send(filterError2)
    }

    let filterOption = args[0];
    if (!args[0]) {
        const filterOptions = new MessageEmbed()
            .setTitle(`**Filter Options:**`)
            .setDescription(`\`
            3d
            bassboost
            echo
            karaoke
            nightcore
            vaporwave
            flanger
            gate
            reverse
            surround
            mcompand
            phaser
            tremolo
            earwax\`` )
            .setColor("#cc338b")
            .setFooter("Do not panic if bot seems to be stuck while applying filter, be patient since it takes time to apply filter")

        return message.channel.send(filterOptions)
    }

    try {
        await client.distube.setFilter(message, filterOption)
            const embed = new MessageEmbed()
                .setDescription('Music Filter has been set to: ' + `(${filterOption})` || 'Off ')
                .setColor("#cc338b")
                .setImage(`https://media.discordapp.net/attachments/850619329628471336/897182687817764904/163f072171cd10a20e99bb35d4c7b278.gif`)
                .setFooter("Do not panic if bot seems to be stuck while applying filter, be patient since it takes time to apply filter and to disable filter, reapply the same flter.")
            return message.channel.send(embed)
    } catch (error) {
        return;
    }

};




module.exports.help = {
	name: "filter",
	description: "filter",
	usage: "b-filter <filterOption>",
	accessableby: "Members",
	aliases: []
};