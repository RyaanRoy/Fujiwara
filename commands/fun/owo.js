const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const request = require("superagent");
const owoify = require('owoify-js').default
module.exports.run = async (client, message, args) => {
message.channel.send(`${owoify(args[0])}`);
};

module.exports.help = {
	name: "owo",
	description: "This command is used to hug someone",
	usage: "f-owo [text]",
	accessableby: "Members",
	aliases: ["owoify"]
};