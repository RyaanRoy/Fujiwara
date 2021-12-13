const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const request = require("superagent");
const owoify = require('owoifyx')
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
message.reply(`${owoify(query)}`);
};

module.exports.help = {
	name: "owo",
	description: "This command is used to hug someone",
	usage: "f-owo [text]",
	accessableby: "Members",
	aliases: ["owoify"]
};