const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const r = require('better-tord');
module.exports.run = async (client, message, args) => {
    const dare = r.get_dare();
    message.reply(dare);
};

module.exports.help = {
	name: "dare",
	description: "This command is used for dare questions",
	usage: "f-dare",
	accessableby: "Members",
	aliases: []
};