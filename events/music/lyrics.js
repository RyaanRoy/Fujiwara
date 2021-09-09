const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message);
    if (!queue) return message.channel.send("There is nothing playing.").catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    } catch (error) {
      lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    }

    let lyricsEmbed = new Discord.MessageEmbed()
      .setTitle("Lyrics")
      .setDescription(lyrics)
      .setColor("#F0EAD6")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
};

module.exports.help = {
	name: "lyrics",
	description: "This command is used for getting lyrics.",
	usage: "b-lyrics <name of song>",
	accessableby: "Members",
	aliases: []
};
