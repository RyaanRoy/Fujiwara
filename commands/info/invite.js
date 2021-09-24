const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
	    .setThumbnail("https://pa1.narvii.com/7849/ac3614d844c7e1bc826addec9597af577b42d54er1-498-410_00.gif")
		.setAuthor(`Invite Me to your server!`, client.user.displayAvatarURL())
		.setColor("f28cd3")
		.setDescription(
			`[Click Here (Recommended Permissions)](https://discord.com/api/oauth2/authorize?client_id=874922249411518484&permissions=3757173863&scope=bot)\n[Click Here (Administrator Permissions)](https://dsc.gg/fujiwara-invite)`
		)
		.setImage(`https://c.tenor.com/vdquT9UOP3QAAAAC/kawaii-chika.gif`)
		.setFooter(`© ${nowyear} ${client.user.username}`);
	message.channel.send(embed);
};

module.exports.help = {
	name: "invite",
	description: "This command is used for creating invite links.",
	usage: "b-invite",
	accessableby: "Members",
	aliases: []
};
