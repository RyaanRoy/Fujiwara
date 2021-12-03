const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

        const { body } = await superagent.get("https://nekos.life/api/v2/img/poke");
				if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} pokes ${member.user.username}`)
						.setColor('#cc338b')
						.setDescription(
							`Teehee!`
						)
						.setImage(body.url);

						message.channel.send({embeds:[embed]});
				} else message.reply("You need to mention the user to poke!");
			
		
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "poke",
	description: "This command is used for poking.",
	usage: "f-poke <mentions>",
	accessableby: "Members",
	aliases: []
};
