const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config/config.json");
const simplydjs = require("simply-djs");
module.exports.run = async (client, message, args) => {
	if (message.author.id != process.env.OWNERID){
		return message.channel.send("Only my developer can use this command...");
    }
    let embed1 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(`**Help with all commands**`)
    .setDescription(
        `Yoo! **My prefix is:** f- \nClick [here](https://dsc.gg/fujiwara-recommended) to invite me to your server.\nTo chat with me simply mention or reply to me and ask a question.\n📱**Basic**: help, ping, uptime, vote\n\nTo get more info about a command type f-help <command>`
    )
    .addField(`<a:duckdance:859068191871598592>   Support Server`, `To join the support server: [Invite to support server](https://discord.gg/qXDyWEesW6)`, false)
    .addField(`🐛   Annoying Bugs`,`See a bug? Use f-bugreport and describe the bug. It will be reviewed by the bot dev immediately!`, false)
    .addField(`Command Sections`,
    `<:arrow:904250175822889010> Moderation
<:arrow:904250175822889010> Fun
<:arrow:904250175822889010> Utility
<:arrow:904250175822889010> Giveaways
<:arrow:904250175822889010> Image Generation
<:arrow:904250175822889010> Games
<:arrow:904250175822889010> Roleplay
<:arrow:904250175822889010> Music`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setImage(`https://i.pinimg.com/originals/b6/b4/de/b6b4ded4bd797b093cc9b68aa6fba694.gif`)
    .setFooter(`Custom Prefixes have been removed`, client.user.displayAvatarURL());
    
    let embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Moderation Commands** `)
    .addField(`Total Moderation Commands: 15`,
    `<:arrow:904250175822889010>Purge
<:arrow:904250175822889010>Mute
<:arrow:904250175822889010>Unmute
<:arrow:904250175822889010>Kick
<:arrow:904250175822889010>Ban
<:arrow:904250175822889010>Unban
<:arrow:904250175822889010>Warn
<:arrow:904250175822889010>Warnings
<:arrow:904250175822889010>Clearwarn
<:arrow:904250175822889010>Createchannel
<:arrow:904250175822889010>Createemoji
<:arrow:904250175822889010>Lockchannel
<:arrow:904250175822889010>Unlockchannel
<:arrow:904250175822889010>Rename
<:arrow:904250175822889010>Slowmode
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed3 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Giveaway Commands** `)
    .addField(`Total Giveaway Commands: 3`,
    `<:arrow:904250175822889010>Gstart
<:arrow:904250175822889010>Gend
<:arrow:904250175822889010>Greroll

`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed4 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Fun Commands** `)
    .addField(`Total Funny Commands: 7`,
    `<:arrow:904250175822889010>8ball
<:arrow:904250175822889010>Ship
<:arrow:904250175822889010>AnimeSearch
<:arrow:904250175822889010>Aes256
<:arrow:904250175822889010>Deaes256
<:arrow:904250175822889010>Meme
<:arrow:904250175822889010>Sudo
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();
    let pages = [embed1, embed2, embed3, embed4]; 
    

    
    simplydjs.embedPages(client, message, pages, {
      firstEmoji: "a:left_arrow:882976561345736764",
      backEmoji: "a:left:860483547251867671",
      delEmoji: ":blurplecross:859068750589460533",
      forwardEmoji: "a:right:860483602172739604",
      lastEmoji: "a:right_arrow:882976449085181952",
    
      btncolor: "PRIMARY",
      delcolor: "DANGER",
      skipcolor: "SUCCESS",
      pgCount: true,
      timeout: 300000,
      skipBtn: true,
      delBtn: false
    });

};

module.exports.help = {
	name: "newhelp",
	description:"nothing",
	usage: "f-newhelp",
	accessableby: "Bot Owners",
	aliases: []
};