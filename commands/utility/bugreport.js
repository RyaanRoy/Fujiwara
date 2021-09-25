const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
    const owner = client.users.cache.get("744847481430343691");
    const query = args.join(" ");
    const channel = guild.channels.cache 
    .filter((channel) => channel.type === 'text')
    .first();
  if (!channel || guild.member(client.user).hasPermission('CREATE_INSTANT_INVITE')) {
  await channel
    .createInvite({ maxAge: 0, maxUses: 0 })
    .then(async (invite) => {
      invites.push(`${guild.name} - ${invite.url}`); // push invite link and guild name to array
    })
    .catch((error) => console.log(error));
  }
    if (!query) return message.reply("Please specify a query!");

    const thanksFor = new MessageEmbed()
      .setTitle("Thanks for reporting!")
      .setDescription(
        `<@${message.author.id}>, Sorry for the inconvenience, and thanks for reporting the issues!\nYour report now will be reviewed by the bot developer and be fixed as soon as possible`
      )
      .setTimestamp()
      .setColor("RED");

    const reportEmbed = new MessageEmbed()
      .setTitle("New Bug Issues!")
      .addField("Author", message.author.toString(), true)
      .addField("Guild", message.guild.name, true)
      .addField("invite", invite.url, true)
      .addField("Report Description", query)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor("PINK")
      .setTimestamp();

    owner.send(reportEmbed);
    if (query) return message.reply(thanksFor);

};

module.exports.help = {
	name: "bugreport",
	description: "This command is used for reporting bugs",
	usage: "b-bugreport <bug>",
	accessableby: "Member",
	aliases: ["br"]
};
