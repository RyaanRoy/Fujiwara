const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const moment = require("moment");
const { Calculator } = require('weky');



module.exports.run = async (client, message, args) => {
		await Calculator({
			message: message,
			embed: {
				title: 'Calculator ',
				color: '#5865F2',
				footer: '©️Fujiwara Is Good At Math',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		});
    }

module.exports.help = {
	name: "calculator",
	description:
		"calculator on discord",
	usage: "f-calculator",
	accessableby: "Member",
	aliases: ["clt"]
};