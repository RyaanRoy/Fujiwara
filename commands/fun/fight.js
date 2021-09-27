const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");
module.exports.run = async (client, message, args) => {
    const opponent = message.mentions.users.first();
    if (!opponent)
      return message.channel.send(`Please mention who you want to fight`);
    const { fight } = require("weky");
    const x = new fight({
      client: client,
      message: message,
      acceptMessage: "Click to fight with <@" + message.author + ">",
      challenger: message.author,
      opponent: message.mentions.users.first(),
      hitButtonText: "HIT",
      hitButtonColor: "red",
      healButtonText: "HEAL",
      healButtonColor: "green",
      cancelButtonText: "CANCEL",
      cancelButtonColor: "blurple",
    });
    x.start();
};

module.exports.help = {
	name: "fight",
	description: "This command is used to fight users",
	usage: "b-fight <mention",
	accessableby: "Members",
	aliases: []
};