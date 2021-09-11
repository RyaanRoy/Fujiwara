const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle(`${message.guild.name}'s Icon`)
    .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(message.guild.me.displayHexColor);
  message.channel.send(embed);
};

module.exports.help = {
	name: "serverav",
	description: "This command is used for checking the server avatar.",
	usage: "b-serverav",
	accessableby: "Member",
	aliases: []
};
