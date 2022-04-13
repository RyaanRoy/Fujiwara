
const Discord = require("discord.js");
const fs = require("fs");
const config = require("../../config/config.json");
const simplydjs = require("simply-djs");
module.exports.run = async (client, message, args) => {


    let embed1 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(`**Help with all commands**`)
    .setDescription(
        `Yoo! **My prefix is:** f- \nClick [here](https://dsc.gg/fujiwara-recommended) to invite me to your server.\nTo chat with me simply mention or reply to me and ask a question.\n📱**Basic**: help, ping, uptime, vote`
    )
    .addField(`<a:duckdance:859068191871598592>   Support Server`, `To join the support server: [Invite to support server](https://discord.gg/qXDyWEesW6)`,false)
    .addField(`🐛   Annoying Bugs`,`See a bug? Use f-bugreport and describe the bug. It will be reviewed by the bot dev immediately!`, false)
    .addField(`Command Sections`,
    `<:D_Arrow:937938311467655169> Moderation
<:D_Arrow:937938311467655169> Fun
<:D_Arrow:937938311467655169> Utility
<:D_Arrow:937938311467655169> Giveaways
<:D_Arrow:937938311467655169> Image Generation
<:D_Arrow:937938311467655169> Games
<:D_Arrow:937938311467655169> Roleplay
<:D_Arrow:937938311467655169> Music`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    .setImage(`https://i.pinimg.com/originals/b6/b4/de/b6b4ded4bd797b093cc9b68aa6fba694.gif`)
    .setFooter(`Custom Prefixes have been removed`, client.user.displayAvatarURL());
    
    let embed2 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Moderation Commands** `)
    .addField(`Total Moderation Commands: 15`,
    `<:D_Arrow:937938311467655169>Purge
<:D_Arrow:937938311467655169>Mute
<:D_Arrow:937938311467655169>Unmute
<:D_Arrow:937938311467655169>Kick
<:D_Arrow:937938311467655169>Ban
<:D_Arrow:937938311467655169>Unban
<:D_Arrow:937938311467655169>Warn
<:D_Arrow:937938311467655169>Warnings
<:D_Arrow:937938311467655169>Clearwarn
<:D_Arrow:937938311467655169>Createchannel
<:D_Arrow:937938311467655169>Createemoji
<:D_Arrow:937938311467655169>Lockchannel
<:D_Arrow:937938311467655169>Unlockchannel
<:D_Arrow:937938311467655169>Rename
<:D_Arrow:937938311467655169>Slowmode
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed3 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Giveaway Commands** `)
    .addField(`Total Giveaway Commands: 3`,
    `<:D_Arrow:937938311467655169>Gstart
<:D_Arrow:937938311467655169>Gend
<:D_Arrow:937938311467655169>Greroll

`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed4 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Fun Commands** `)
    .addField(`Total Funny Commands: 7`,
    `<:D_Arrow:937938311467655169>8ball
<:D_Arrow:937938311467655169>Owo
<:D_Arrow:937938311467655169>Ship
<:D_Arrow:937938311467655169>AnimeSearch
<:D_Arrow:937938311467655169>Aes256
<:D_Arrow:937938311467655169>Deaes256
<:D_Arrow:937938311467655169>Meme
<:D_Arrow:937938311467655169>Sudo
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed5 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Utility Commands** `)
    .addField(`Total Utility Commands: 24`,
    `<:D_Arrow:937938311467655169>Enlarge
<:D_Arrow:937938311467655169>Reminder
<:D_Arrow:937938311467655169>Maps
<:D_Arrow:937938311467655169>Wikipedia
<:D_Arrow:937938311467655169>Urban
<:D_Arrow:937938311467655169>Google
<:D_Arrow:937938311467655169>Roblox
<:D_Arrow:937938311467655169>Serverinfo
<:D_Arrow:937938311467655169>Serveravatar
<:D_Arrow:937938311467655169>Avatar
<:D_Arrow:937938311467655169>Banner
<:D_Arrow:937938311467655169>Whois
<:D_Arrow:937938311467655169>Roleinfo
<:D_Arrow:937938311467655169>Channel
<:D_Arrow:937938311467655169>Embed (separate arguments with ;)
<:D_Arrow:937938311467655169>Imageembed
<:D_Arrow:937938311467655169>Reverse
<:D_Arrow:937938311467655169>Setafk
<:D_Arrow:937938311467655169>Stats
<:D_Arrow:937938311467655169>Timer
<:D_Arrow:937938311467655169>Translate
<:D_Arrow:937938311467655169>Weather
<:D_Arrow:937938311467655169>Youtube-search
<:D_Arrow:937938311467655169>Valorant
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed6 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Image Commands** `)
    .addField(`Total Image Commands: 15`,
    `<:D_Arrow:937938311467655169>Captcha
<:D_Arrow:937938311467655169>Circle
<:D_Arrow:937938311467655169>Delete
<:D_Arrow:937938311467655169>Gay
<:D_Arrow:937938311467655169>Changemymind
<:D_Arrow:937938311467655169>Trigger
<:D_Arrow:937938311467655169>Clyde
<:D_Arrow:937938311467655169>Petpet
<:D_Arrow:937938311467655169>Wasted
<:D_Arrow:937938311467655169>Dog
<:D_Arrow:937938311467655169>Cat
<:D_Arrow:937938311467655169>Drake
<:D_Arrow:937938311467655169>Wide
<:D_Arrow:937938311467655169>Rip
<:D_Arrow:937938311467655169>Iphonex
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed9 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Roleplay Commands** `)
    .addField(`Total Roleplay Commands: 13`,
    `<:D_Arrow:937938311467655169>Baka
<:D_Arrow:937938311467655169>Cuddle
<:D_Arrow:937938311467655169>Hug
<:D_Arrow:937938311467655169>Feed
<:D_Arrow:937938311467655169>Kiss
<:D_Arrow:937938311467655169>Meow
<:D_Arrow:937938311467655169>Poke
<:D_Arrow:937938311467655169>Pat
<:D_Arrow:937938311467655169>Slap
<:D_Arrow:937938311467655169>Punch
<:D_Arrow:937938311467655169>Kill
<:D_Arrow:937938311467655169>Smug
<:D_Arrow:937938311467655169>Waifu
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();
    
    let embed7 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Game Commands** `)
    .addField(`Total Game Commands: 10`,
    `<:D_Arrow:937938311467655169>Akinator
<:D_Arrow:937938311467655169>Football
<:D_Arrow:937938311467655169>Tictactoe
<:D_Arrow:937938311467655169>Youtubetogether
<:D_Arrow:937938311467655169>Betrayal
<:D_Arrow:937938311467655169>Trivia
<:D_Arrow:937938311467655169>Calculator
<:D_Arrow:937938311467655169>Truth
<:D_Arrow:937938311467655169>Dare
<:D_Arrow:937938311467655169>Neverhaveiever
<:D_Arrow:937938311467655169>Wouldyourather
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed8 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Music Commands** `)
    .addField(`Total Music Commands: 12`,
    `<:D_Arrow:937938311467655169>Play
<:D_Arrow:937938311467655169>Stop    
<:D_Arrow:937938311467655169>Pause
<:D_Arrow:937938311467655169>Resume
<:D_Arrow:937938311467655169>Queue
<:D_Arrow:937938311467655169>Autoplay
<:D_Arrow:937938311467655169>Loop
<:D_Arrow:937938311467655169>Volume
<:D_Arrow:937938311467655169>Skip
<:D_Arrow:937938311467655169>Lyrics
<:D_Arrow:937938311467655169>Filter
<:D_Arrow:937938311467655169>Jumpto
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

 
    let pages = [embed1,embed2, embed3, embed4, embed5, embed6, embed7, embed9, embed8]; 
    

    
    simplydjs.embedPages(client, message, pages, {
      firstEmoji: ":blurpleleave:859068581768986664",
      backEmoji: "a:left:860483547251867671",
      delEmoji: "a:bluecheck:817793462736781343",
      forwardEmoji: "a:right:860483602172739604",
      lastEmoji: ":blurplejoin:859068550211567666",
    
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
	name: "help",
	description:"Help with bot commands",
	usage: "f-help",
	accessableby: "Members",
	aliases: []
};

