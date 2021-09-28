const Discord = require("discord.js");
const gifmusic="https://c.tenor.com/bUDsN9jYARQAAAAM/disc-music.gif";
module.exports = async (client, message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
    .setAuthor(`Now Playing`, gifmusic)
    .setTitle(`${song.name} - ${
        song.formattedDuration
    }`)
    .setDescription(`Requested by: ${song.user.tag}`) 
       .addField(`Options`,
            `${client.status(queue)}`
    )
    .setColor(`#f77ec6`)
    .setThumbnail(`${song.thumbnail}`);
	message.channel.send(Embed);
};


