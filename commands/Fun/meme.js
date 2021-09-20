const Discord = require("discord.js");
const request = require("request");
const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports.run = (client, message, _args) => {
    const res = await fetch(`http://api.popcatdev.repl.co/meme`);
    const meme = await res.json();
    const embed = new MessageEmbed()
      .setTitle(meme.title)
      .setURL(meme.url)
      .setColor("RANDOM")
      .setImage(meme.image)
      .setFooter(`👍 ${meme.upvotes} || 💬 ${meme.comments}`);

    message.channel.send(embed);
};

module.exports.help = {
	name: "meme",
	description: "This command is used for generating some cool memes.",
	usage: "b-meme",
	accessableby: "Member",
	aliases: []
};
