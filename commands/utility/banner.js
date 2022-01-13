const Discord = require("discord.js");
const axios = require("axios")
module.exports.run = (client, message, args) => {
const user= message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if (!user) return message.reply("Mention a User!");

axios.get(`https://discord.com/api/users/${user.id}`,{
    headers: {
        Authorization: `Bot ${process.env.TOKEN}`,
    },
})
.then((res)=>{
    const {banner, accent_color} = res.data;

	if(banner){
const extension=banner.startsWith("a_") ? '.gif' : '.png';
const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;
	
const embed = new Discord.MessageEmbed()
.setTitle(`${user.tag}'s banner`)
.setImage(`${url}?size=2048`)


message.channel.send({embeds:[embed]});

}
	else{
if(accent_color){
	const embed1 = new Discord.MessageEmbed()
	.setTitle(`${user.tag} has no banner so here is their accent color instead:${accent_color}`)
	.setColor(accent_color)
	.setTimestamp();
message.channel.send({embeds:[embed1]});
}else{
message.reply("Mentioned user has neither a banner nor an accent color!");

}
	}


})
};

module.exports.help = {
	name: "banner",
	description: "This command is used for showing your/other member's banner.",
	usage: "f-banner <mentions>(optional)",
	accessableby: "Member",
	aliases: ["bn"]
};
