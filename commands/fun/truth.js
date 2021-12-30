const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const r = require('better-tord');
module.exports.run = async (client, message, args) => {
    const truth = r.get_truth();
    message.reply(truth);
};

module.exports.help = {
	name: "truth",
	description: "This command is used for truth questions",
	usage: "f-truth",
	accessableby: "Members",
	aliases: []
};