const Discord = require("discord.js");
const gifmusic="https://cdn.discordapp.com/attachments/850619329628471336/877233598057545749/image_processing20200131-9914-t3yrnb_1.gif";
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
    .setImage(`https://cdn.discordapp.com/attachments/850619329628471336/897773639284428810/ezgif.com-gif-maker.gif`)
    .setColor(`#f77ec6`)
    .setThumbnail(`${song.thumbnail}`);
	message.channel.send(Embed);
};


