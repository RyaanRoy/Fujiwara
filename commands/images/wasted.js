const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Bruh mention a user!");
    }
    const avatar = user.user.displayAvatarURL({ size: 4096, format: "jpg" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`,
          name: "file.jpg",
        },
      ],
    });
};

module.exports.help = {
	name: "wasted",
	description: "This command is used for wasted.",
	usage: "f-wasted",
	accessableby: "Members",
	aliases: []
};
