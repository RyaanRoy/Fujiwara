const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const { WouldYouRather } = require('weky');



module.exports.run = async (client, message, args) => {
    await WouldYouRather({
        message: message,
        embed: {
            title: 'Would you rather',
            color: '#5865F2',
            footer: 'lol',
            timestamp: true
        },
        thinkMessage: 'Lemme think...',
        othersMessage: 'Only <@{{author}}> can use the buttons!',
        buttons: { optionA: 'Option A', optionB: 'Option B' }
    });
    }

module.exports.help = {
	name: "wouldyourather",
	description:
		"Would you Rather questions",
	usage: "f-wouldyourather",
	accessableby: "Member",
	aliases: ["wyr"]
};