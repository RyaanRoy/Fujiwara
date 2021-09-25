const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
    const owner = client.users.cache.get("744847481430343691");
    const query = args.join(" ");

    if (!query) return message.reply("Please specify a query!");

    const thanksFor = new MessageEmbed()
      .setTitle("Thanks for reporting!")
      .setDescription(
        `<@${message.author.id}>, Sorry for the inconvenience, and thanks for reporting the issues!\nYour report now is reviewed by our staff.`
      )
      .setTimestamp()
      .setColor("RED");

    const reportEmbed = new MessageEmbed()
      .setTitle("New Bug Issues!")
      .addField("Author", message.author.toString(), true)
      .addField("Guild", message.guild.name, true)
      .addField("Report Description", query)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor("BLUE")
      .setTimestamp();

    owner.send(reportEmbed);
    if (query) return message.reply(thanksFor);
    message.delete();
};

module.exports.help = {
	name: "bugreport",
	description: "This command is used for reporting bugs",
	usage: "b-bugreport <bug>",
	accessableby: "Member",
	aliases: ["br"]
};
