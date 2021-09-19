const Discord = require("discord.js");
const fs = require("fs");
const fetch = require("node-fetch");
const config = require("../../config/config.json");
const {
	Client,
	Message,
	MessageEmbed,
	version: djsversion,
  } = require("discord.js");
  const { utc } = require("moment");
  const version = require("../../package.json").version;
  const os = require("os");
  const ms = require("ms");
  const pretty = require("pretty-ms");
module.exports.run = async (client, message) => {
    // Capitalize Func
    function capitalizeFirst(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	  }
	  const core = os.cpus()[0];
	  const embed = new MessageEmbed()
		.setTitle(`Bumblebee Stats`)
		.setURL(client.web)
		.setThumbnail(client.user.displayAvatarURL())
		.setColor(message.guild.me.displayHexColor || client.color)
		.addField("<General", [
		  `**❯ Client :** ${client.user.tag} (${client.user.id})`,
		  `**❯ Commands Total :** ${client.commands.size}`,
		  `**❯ Server :** ${client.guilds.cache.size.toLocaleString()} Servers`,
		  `**❯ Users :** ${client.guilds.cache
			.reduce((a, b) => a + b.memberCount, 0)
			.toLocaleString()} Users`,
		  `**❯ Channels :** ${client.channels.cache.size.toLocaleString()} Channels`,
		  `**❯ Creation Date :** ${utc(client.user.createdTimestamp).format(
			"Do MMMM YYYY HH:mm:ss"
		  )}`,
		  `**❯ Node.js :** ${process.version}`,
		  `**❯ Version :** v${version}`,
		  `**❯ Discord.js :** v${djsversion}`,
		  `**❯ Bot Uptime :** ${pretty(client.uptime)}`,
		  "\u200b",
		])
		.addField("System", [
		  `**❯ OS Platform :** ${capitalizeFirst(process.platform)}`,
		  `**❯ OS Uptime :** ${ms(os.uptime() * 1000, { long: true })}`,
		  `**❯ CPU :**`,
		  `\u3000 Cores : ${os.cpus().length}`,
		  `\u3000 Model : ${core.model}`,
		  `\u3000 Speed : ${core.speed} MHz`,
		])
		.addField("Network", [
		  `**❯ Latency :** ${client.ws.ping} ms`,
		])
		.setTimestamp();
  
	  message.channel.send(embed);
};
module.exports.help = {
	name: "stats",
	description: "This command is used for monitoring stats of bot.",
	usage: "b-stats",
	accessableby: "Member",
	aliases: []
};
