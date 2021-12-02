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
        `Yoo! **My prefix is:** f- \nClick [here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.\nTo chat with me simply mention or reply to me and ask a question.\n📱**Basic**: help, ping, uptime, vote\nTo report bugs, simply type f-bugreport and describe the issue\nTo get more info about a command type f-help <command>`
    )
    .addField(`<a:duckdance:859068191871598592>   Support Server`, `To join the support server: [Invite to support server](https://discord.gg/qXDyWEesW6)`, false)
    .addField(`Annoying Bugs`,`See a bug? Use f-bugreport and describe the bug. It will be reviewed by the bot dev immediately!`, false)
    .addField(`Command Sections`,`
        >Moderation
        >Fun
        >Utility
        >Giveaways
        >Image Generation
        >Games
        >Roleplay
        >Music
    `)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setImage(`https://i.pinimg.com/originals/b6/b4/de/b6b4ded4bd797b093cc9b68aa6fba694.gif`)
    .setFooter(`Custom Prefixes have been removed`, client.user.displayAvatarURL());
    
    let embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(`**Moderation Commands**`)
    .addField(`Total Moderation Commands: 15`,`
       >Purge
       >Mute
       >Unmute
       >Kick
       >Ban
       >Unban
       >Warn
       >Warnings
       >Clearwarn
       >Createchannel
       >Createemoji
       >Lockchannel
       >Unlockchannel
       >Rename
       >Slowmode
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();
    let pages = [embed1, embed2]; 
    

    
    simplydjs.embedPages(client, message, pages, {
      firstEmoji: "a:left_arrow:882976561345736764",
      backEmoji: "a:left:860483547251867671",
      delEmoji: ":blurplecross:859068750589460533",
      forwardEmoji: "a:right:860483602172739604",
      lastEmoji: "a:right_arrow:882976449085181952",
    
      btncolor: "PRIMARY",
      delcolor: "DANGER",
      skipcolor: "PRIMARY",
    
      skipBtn: true,
      delBtn: true
    });

};

module.exports.help = {
	name: "newhelp",
	description:"nothing",
	usage: "f-newhelp",
	accessableby: "Bot Owners",
	aliases: []
};