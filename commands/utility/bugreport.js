
const { Discord,Client, Message, MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {
   
    const query = args.join(" ");
    const invite = await message.channel.createInvite(
      {
        maxAge: 0, 
        maxUses: 0,
      }
    )
    
    if (!query) return message.reply("Please specify a query!");
 console.log(invite);
    const thanksFor = new MessageEmbed()
      .setTitle("Thanks for reporting!")
      .setDescription(
        `<@${message.author.id}>, Sorry for the inconvenience caused, and thanks for reporting the issues!\nYour report now will be reviewed by the bot developer and be fixed as soon as possible`
      )
      .setTimestamp()
      .setImage(`https://c.tenor.com/k5Gy8HYMNNsAAAAC/fujiwara-shocked.gif`)
      .setColor("#e886db");

    const reportEmbed = new MessageEmbed()
      .setTitle("New Bug Issues!")
      .addField("Author", message.author.toString(), true)
      .addField("Guild", message.guild.name, true)
      .addField("Report Description", query)
      .addField("Invite", `${invite}`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setColor(`#ffa5ba`) 
      .setTimestamp();

    client.channels.cache.get(`895548282468716595`).send({embeds:[reportEmbed]});
    
    if (query) return message.reply({embeds:[thanksFor]});

};

module.exports.help = {
	name: "bugreport",
	description: "This command is used for reporting bugs",
	usage: "f-bugreport <bug>",
	accessableby: "Member",
	aliases: ["br"]
};


