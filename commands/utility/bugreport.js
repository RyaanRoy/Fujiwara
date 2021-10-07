const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {
    const owner = client.users.cache.get("744847481430343691");
    const query = args.join(" ");
    const invite = await message.channel.createInvite(
      {
        maxAge: 0, // maximum time for the invite, in milliseconds
        maxUses: 0, // maximum times it can be used
      }
    )
    
    if (!query) return message.reply("Please specify a query!");

    const thanksFor = new MessageEmbed()
      .setTitle("Thanks for reporting!")
      .setDescription(
        `<@${message.author.id}>, Sorry for the inconvenience, and thanks for reporting the issues!\nYour report now will be reviewed by the bot developer and be fixed as soon as possible`
      )
      .setTimestamp()
      .setColor("PINK");

    const reportEmbed = new MessageEmbed()
      .setTitle("New Bug Issues!")
      .addField("Author", message.author.toString(), true)
      .addField("Guild", message.guild.name, true)
      .addField("Report Description", query)
      .addField("Invite", invite)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor(`#ffa5ba`)
      .setTimestamp();

    client.channels.cache.get(`895548282468716595`).send(reportEmbed);
    if (query) return message.reply(thanksFor);

};

module.exports.help = {
	name: "bugreport",
	description: "This command is used for reporting bugs",
	usage: "b-bugreport <bug>",
	accessableby: "Member",
	aliases: ["br"]
};
