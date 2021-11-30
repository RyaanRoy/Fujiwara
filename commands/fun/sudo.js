const Discord = require("discord.js");
const superagent = require("superagent");
const { Client, Message, MessageEmbed } = require("discord.js");
const sudo  = require("weky");
module.exports.run = async (client, message, args) => {

        
        let lockPermErrban = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to create Webhook! Require: MANAGE_WEBHOOKS**")

     if (!message.guild.me.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send({embeds:[lockPermErrban]})
     
    
    message.delete();
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please provide a user!");
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send(args.slice(1).join(" ")).then(() => {
      webhook.delete();
    });
};

module.exports.help = {
	name: "sudo",
	description: "This command is used for sudoing as someone",
	usage: "f-sudo<user-mention> <message>",
	accessableby: "Member",
	aliases: []
};
