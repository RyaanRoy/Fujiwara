const Discord = require("discord.js");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const ms = require("ms");
module.exports.run = async (client, message, args) => {
    let reminder = args.slice(1).join(" ");
    let time = args[0];

    if (!time) return message.channel.send("Please set a time to reminder!");
    if (!reminder) return message.channel.send("Please state a reminder!");
    if (reminder.length > 200)
      return message.channel.send("Max Reminder Length Is 500 Characters");

    const setreminderembed = new MessageEmbed()
      .setColor("PINK")
      .setTitle("Reminder Set!")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`Successfully set <@${message.author.id}> a reminder!`)
      .addField("⌛ Reminded In ⌛", `\`${time}\``)
      .addField("👥 Reminder 👥", `${reminder}`)
      .setTimestamp();

    message.channel.send(setreminderembed);

    // Pake arrow function () => {} biar keren :v
    setTimeout(async () => {
      message.channel.send(`<@${message.author.id}> Reminder Timeout!`);

      const alertembed = new MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Reminder Alert!")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `Hey, <@${message.author.id}>! Your reminder has timed out!`
        )
        .addField("⌛ Reminder ⌛", `\`${reminder}\``)
        .setTimestamp();

      message.channel.send(alertembed);
    }, ms(time));
};

module.exports.help = {
	name: "reminder",
	description:
		"Set reminders",
	usage: "b-reminder <time> <reminder-message>",
	accessableby: "Member",
	aliases: ["reminder"]
};