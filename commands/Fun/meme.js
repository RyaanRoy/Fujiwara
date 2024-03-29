const Discord = require("discord.js");
const request = require("request");
const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  const res = await fetch(`http://api.popcatdev.repl.co/meme`);
  const meme = await res.json();
  const embed = new MessageEmbed()
    .setTitle(meme.title)
    .setURL(meme.url)
    .setColor("#cc338b")
    .setImage(meme.image)
    .setFooter(`👍 ${meme.upvotes} || 💬 ${meme.comments}`);

    message.channel.send({embeds:[embed]});
};

module.exports.help = {
	name: "meme",
	description: "This command is used for generating some cool memes.",
	usage: "f-meme",
	accessableby: "Member",
	aliases: []
};
