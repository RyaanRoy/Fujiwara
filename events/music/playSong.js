var shortNumber = require('short-number');
const Discord = require("discord.js");
const gifmusic="https://cdn.discordapp.com/attachments/850619329628471336/877233598057545749/image_processing20200131-9914-t3yrnb_1.gif";
module.exports = async (client, message, queue, song) => {
	const Embed = new Discord.MessageEmbed()
    .setAuthor(`Now Playing`, gifmusic)
    .setTitle(`${song.name} - ${
        song.formattedDuration
    }`)
    .setDescription(`Requested by: ${song.user.tag}`) 
    .addField(`> <:5618like:865325952866058240> **Likes**`, `   **    ${shortNumber(queue.songs[0].likes)}**`, true)
.addField(`> <:dislike:865325952811401276> **Dislikes**`, `   **    ${shortNumber(queue.songs[0].dislikes)}**`, true)
.addField(`> <:eyes_sus:843496570174308352>  **Views**`, `   **    ${shortNumber(queue.songs[0].views)}**`, true)
       .addField(`⚙️ Options`,
`${client.status(queue)}`, false)
    .setImage(`https://media.tenor.co/videos/573252ab1b3671a492ede5e985eb3a24/mp4`)
    .setColor(`#f77ec6`)
    .setThumbnail(`${song.thumbnail}`);
	message.channel.send(Embed);
};


