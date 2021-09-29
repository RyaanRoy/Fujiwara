const Discord = require("discord.js");
const superagent = require("superagent");
const { Client, Message, MessageEmbed } = require("discord.js");
const sudo  = require("weky");
module.exports.run = async (client, message, args) => {

    const user = message.mentions.members.first();
    if (!user) return message.lineReply(`Mention someone pls`);
    const msg = args.slice(1).join(" ");
    if (!msg) return message.channel.send(`Specify a message!`);
    const xd = new sudo({
      message: message,
      text: msg,
      member: user,
    });
    xd.start();
};

module.exports.help = {
	name: "sudo",
	description: "This command is used for sudoing as someone",
	usage: "b-sudo<user-mention> <message>",
	accessableby: "Member",
	aliases: []
};
