const Discord = require("discord.js");
const superagent = require("superagent");
const { Client, Message, MessageEmbed } = require("discord.js");
const sudo  = require("weky");
module.exports.run = async (client, message, args) => {

        
    const mention = message.mentions.members.first() || message.member;
    const avatar = mention.user.displayAvatarURL({
      dynamic: true,
      size: 4096,
      format: "png",
    });

    message.channel.send({
      files: [
        {
          attachment: `https://vacefron.nl/api/wide?image=${avatar}`,
          name: "wideavatar.png",
        },
      ],
    });
};

module.exports.help = {
	name: "wide",
	description: "This command is used for getting wide avatar lol",
	usage: "f-wide <mention",
	accessableby: "Member",
	aliases: []
};
