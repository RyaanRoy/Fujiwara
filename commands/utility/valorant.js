const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");


const axios = require("axios");
module.exports.run = async (client, message, args) => {
    let profile = args[0]
    let tag = args[1]
    let region = args[2]
    if (!args[0] || !args[1]) {
        message.channel.send('Please specify your riot id correctly without a hashtag or space. (usage: f-valorant [name] [tag] [region])')
    }
    if (!region) {
        region = 'ap'
        message.channel.send('Because you did not set a region, it will be automatically set to Asia-Pacific.')
    }
    axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${profile}/${tag}`)
        .then(function (response) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${profile}'s MMR`)
            .addField('Rank', response.data.data.currenttierpatched)
            .addField('Current MMR', `${response.data.data.ranking_in_tier} / 100`)
            .addField('Last MMR Change', response.data.data.mmr_change_to_last_game)
            .addField('Current Elo', response.data.data.elo)
            .setColor('RANDOM')

            message.channel.send({embeds:[embed]})
        })
        .catch(function (error) {
            try {
                let errorMessage = error.response.data.data.message
                if (errorMessage) return message.channel.send(errorMessage)
            } catch {
                message.channel.send('The User has not played a rank match in the last 20 Matches or queued the wrong region.')
            }
        })
};

module.exports.help = {
	name: "valorant",
	description:
		"Searching valorant stats",
	usage: "f-valorant <query>",
	accessableby: "Member",
	aliases: ["val"]
};