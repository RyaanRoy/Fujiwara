const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.MessageEmbed()
      .setColor("#cc338b")
      .setTitle(`${user.username}'s Avatar`)
      .setDescription(
        `[Avatar Link PNG](${user.displayAvatarURL({
          size: 4096,
          dynamic: true,
          format: "png",
        })}) || [Avatar Link JPG](${user.displayAvatarURL({
          size: 4096,
          dynamic: true,
          format: "jpg",
        })} || [Avatar Link WEBP](${user.displayAvatarURL({
          size: 4096,
          dynamic: true,
          format: "webp",
        })}`
      )
      .setImage(user.avatarURL({ size: 4096, dynamic: true, format: "png" }));

    message.channel.send({ embeds: [embed] });

};

module.exports.help = {
	name: "avatar",
	description: "This command is used for showing your/other member's avatar.",
	usage: "f-avatar <mentions>(optional)",
	accessableby: "Member",
	aliases: ["av"]
};
