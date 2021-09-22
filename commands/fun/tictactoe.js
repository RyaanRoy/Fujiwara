const Discord = require("discord.js");
const { tictactoe } = require("reconlx");
const { Client, Message, MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) return message.lineReply("Please specify a member");

    new tictactoe({
      player_two: member,
      message: message,
    });
};

module.exports.help = {
	name: "tictactoe",
	description: "This command is used for generating tickle image.",
	usage: "b-tictactoe <@user>",
	accessableby: "Member",
	aliases: ["ttt"]
};
