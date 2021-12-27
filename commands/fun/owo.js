const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const request = require("superagent");
const Uwuifier = require('uwuifier');
const uwuifier = new Uwuifier({
    spaces: {
        faces: 0.5,
        actions: 0.005,
        stutters: 0.2
    },
    words: 1,
    exclamations: 0.8
});
module.exports.run = async (client, message, args) => {
    const query = args.join(" ");
message.reply(`${uwuifier.uwuifySentence(`**${message.author.username} says:** ${query}`)}`);
};

module.exports.help = {
	name: "owo",
	description: "This command is used to hug someone",
	usage: "f-owo [text]",
	accessableby: "Members",
	aliases: ["owoify"]
};