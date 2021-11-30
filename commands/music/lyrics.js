const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
module.exports.run = async (client, message, args) => {

    const msg = args.slice(0).join(" ");
    let lyrics = null;

    try {
      lyrics = await lyricsFinder(msg, "");
      if (!lyrics) lyrics = `No lyrics found for ${msg}.`;
    } catch (error) {
      lyrics = `No lyrics found for ${msg}.`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle("Lyrics")
      .setDescription(lyrics)
      .setColor("#FFFF00")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
};

module.exports.help = {
	name: "lyrics",
	description: "This command is used for getting lyrics",
	usage: "f-lyrics",
	accessableby: "Connecting to Voice channel",
	aliases: []
};