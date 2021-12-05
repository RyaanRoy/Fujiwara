const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
	const permissions = {
		"ADMINISTRATOR": "Administrator",
		"MANAGE_GUILD": "Manage Server",
		"MANAGE_ROLES": "Manage Roles",
		"MANAGE_CHANNELS": "Manage Channels",
		"KICK_MEMBERS": "Kick Members",
		"BAN_MEMBERS": "Ban Members",
		"MANAGE_NICKNAMES": "Manage Nicknames",
		"MANAGE_EMOJIS": "Manage Emojis",
		"MANAGE_WEBHOOKS": "Manage Webhooks",
		"MANAGE_MESSAGES": "Manage Messages",
		"MENTION_EVERYONE": "Mention Everyone"
	}
	const mention = message.mentions.members.first() || message.member;
	const nick = mention.nickname === null ? "None" : mention.nickname;
	const roles = mention.roles.cache.get === "" ? "None" : mention.roles.cache.get;
	const usericon = mention.user.avatarURL;
	const mentionPermissions = mention.permissions.toArray() === null ? "None" : mention.permissions.toArray();
	const finalPermissions = [];
	for (const permission in permissions) {
		if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
		else;
	}
	var flags = {
		"": "None",
		"DISCORD_EMPLOYEE": "Discord Employee",
		"DISCORD_PARTNER": "Discord Partner",
		"BUGHUNTER_LEVEL_1": "Bug Hunter (Level 1)",
		"BUGHUNTER_LEVEL_2": "Bug Hunter (Level 2)",
		"HYPESQUAD_EVENTS": "Hypesquad Events",
		"HOUSE_BRILLIANCE": "HypeSquad Brilliance",
		"HOUSE_BRAVERY": "HypeSquad Bravery",
		"HOUSE_BALANCE": "HypeSquad Balance",
		"EARLY_SUPPORTER": "Early Supporter",
		"TEAM_USER": "Team User",
		"VERIFIED_BOT": "Verified Bot",
		"EARLY_VERIFIED_DEVELOPER": "Early Verified Bot Developer"
	};
	var botcheck = {
		"true": "Yes, The User is a Bot",
		"false": "No, The User is a Human"
	};
	const userlol = new Discord.MessageEmbed()
	.setAuthor(`User Info`, mention.user.avatarURL({ dynamic: true, format: "jpg"}))
	.addField(`General Info`, `Name: \`${mention.user.username}\` \nTag: \`${mention.user.discriminator}\` \nNickname: \`${nick}\``,true)
	.addField(`Overview`, `Badges: \`${flags[mention.user.flags.toArray().join(", ")]}\`\nIs Bot: \`${botcheck[mention.user.bot]}\``,true)
	.addField(`Server Related Info`, `Roles: <@&${mention._roles.join(">  <@&")}>\nNickname: \`${nick}\``)
	.addField(`Key Permissions`,`${finalPermissions.join(', ')}`)
	.addField(`Other Information`, `Acc Created on: \n\`${moment(mention.user.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}\` \nJoined This Server on: \n\`${moment(mention.joinedAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}\``)
	.setThumbnail(mention.user.avatarURL({ dynamic: true, format: "jpg"}))
	.setFooter(`ID: ${mention.user.id}`, mention.user.avatarURL({ dynamic: true, format: "jpg"}))
	.setTimestamp()
	.setColor("#cc338b");
	message.channel.send({ embeds: [userlol] })

};

module.exports.help = {
	name: "whois",
	description: "Checks User Info",
	usage: "f-whois <mention or keep blank>",
	accessableby: "Members",
	aliases: []
};
