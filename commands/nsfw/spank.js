const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client, message, args) => {
    var errMessage = "This is not an NSFW Channel";
      if (!message.channel.nsfw) {
        message.react("💢");

        return message.reply(errMessage).then((msg) => {
          setTimeout(() => msg.delete(), 3000);
        });
      }
	// eslinf-disable-line no-unused-vars
	try {
		const member = message.mentions.members.first();

        const { body } = await superagent.get("https://nekos.life/api/v2/img/spank");
        if (member) {
					const embed = new Discord.MessageEmbed()
						.setTitle(`${message.author.username} spanks ${member.user.username}`)
						.setColor('#cc338b')
						.setDescription(
							`da fak . . . .`
						)
						.setImage(body.url);

						message.channel.send({embeds:[embed]});
                    } else message.reply("You need to mention the user to spank");
			
		
	} catch (err) {
		message.channel.send(`There was an error!\n${err}`).catch();
	}
};

module.exports.help = {
	name: "spank",
	description: "This command is used for uhm....",
	usage: "f-spank [mention user]",
	accessableby: "Members",
	aliases: []
};
