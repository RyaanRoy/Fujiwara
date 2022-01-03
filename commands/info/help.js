
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
    `<:arrow:904250175822889010> Moderation
<:arrow:904250175822889010> Fun
<:arrow:904250175822889010> Utility
<:arrow:904250175822889010> Giveaways
<:arrow:904250175822889010> Image Generation
<:arrow:904250175822889010> Games
<:arrow:904250175822889010> NSFW
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
<:arrow:904250175822889010>Owo
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

    let embed5 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Utility Commands** `)
    .addField(`Total Utility Commands: 22`,
    `<:arrow:904250175822889010>Enlarge
<:arrow:904250175822889010>Reminder
<:arrow:904250175822889010>Maps
<:arrow:904250175822889010>Wikipedia
<:arrow:904250175822889010>Urban
<:arrow:904250175822889010>Google
<:arrow:904250175822889010>Roblox
<:arrow:904250175822889010>Serverinfo
<:arrow:904250175822889010>Serveravatar
<:arrow:904250175822889010>Avatar
<:arrow:904250175822889010>Whois
<:arrow:904250175822889010>Roleinfo
<:arrow:904250175822889010>Channel
<:arrow:904250175822889010>Embed (separate arguments with ;)
<:arrow:904250175822889010>Imageembed
<:arrow:904250175822889010>Reverse
<:arrow:904250175822889010>Setafk
<:arrow:904250175822889010>Stats
<:arrow:904250175822889010>Timer
<:arrow:904250175822889010>Translate
<:arrow:904250175822889010>Weather
<:arrow:904250175822889010>Youtube-search
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed6 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Image Commands** `)
    .addField(`Total Image Commands: 14`,
    `<:arrow:904250175822889010>Captcha
<:arrow:904250175822889010>Circle
<:arrow:904250175822889010>Delete
<:arrow:904250175822889010>Gay
<:arrow:904250175822889010>Changemymind
<:arrow:904250175822889010>Trigger
<:arrow:904250175822889010>Clyde
<:arrow:904250175822889010>Petpet
<:arrow:904250175822889010>Wasted
<:arrow:904250175822889010>Dog
<:arrow:904250175822889010>Cat
<:arrow:904250175822889010>Drake
<:arrow:904250175822889010>Rip
<:arrow:904250175822889010>Iphonex
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed9 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Roleplay Commands** `)
    .addField(`Total Roleplay Commands: 13`,
    `<:arrow:904250175822889010>Baka
<:arrow:904250175822889010>Cuddle
<:arrow:904250175822889010>Hug
<:arrow:904250175822889010>Feed
<:arrow:904250175822889010>Kiss
<:arrow:904250175822889010>Meow
<:arrow:904250175822889010>Poke
<:arrow:904250175822889010>Pat
<:arrow:904250175822889010>Slap
<:arrow:904250175822889010>Punch
<:arrow:904250175822889010>Kill
<:arrow:904250175822889010>Smug
<:arrow:904250175822889010>Waifu
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();
    
    let embed7 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Game Commands** `)
    .addField(`Total Game Commands: 10`,
    `<:arrow:904250175822889010>Akinator
<:arrow:904250175822889010>Football
<:arrow:904250175822889010>Tictactoe
<:arrow:904250175822889010>Youtubetogether
<:arrow:904250175822889010>Betrayal
<:arrow:904250175822889010>Trivia
<:arrow:904250175822889010>Calculator
<:arrow:904250175822889010>Truth
<:arrow:904250175822889010>Dare
<:arrow:904250175822889010>Neverhaveiever
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed8 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **Music Commands** `)
    .addField(`Total Music Commands: 12`,
    `<:arrow:904250175822889010>Play
<:arrow:904250175822889010>Stop    
<:arrow:904250175822889010>Pause
<:arrow:904250175822889010>Resume
<:arrow:904250175822889010>Queue
<:arrow:904250175822889010>Autoplay
<:arrow:904250175822889010>Loop
<:arrow:904250175822889010>Volume
<:arrow:904250175822889010>Skip
<:arrow:904250175822889010>Lyrics
<:arrow:904250175822889010>Filter
<:arrow:904250175822889010>Jumpto
`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

    let embed10 = new Discord.MessageEmbed()
    .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setTitle(` **NSFW Commands** `)
    .addField(`Total NSFW Commands: 10`,
    `<:arrow:904250175822889010>||Blowjob||
<:arrow:904250175822889010>||Spank||    
<:arrow:904250175822889010>||Hentai||
<:arrow:904250175822889010>||Gasm||
<:arrow:904250175822889010>||Futanari||
<:arrow:904250175822889010>||Trap||
<:arrow:904250175822889010>||Boobs||
<:arrow:904250175822889010>||Pussy||
<:arrow:904250175822889010>||Lesbian||

`)
    .setColor(`#cc338b`)
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();
    let pages = [embed1,embed2, embed3, embed4, embed5, embed6, embed7, embed9, embed8, embed10]; 
    

    
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
	name: "help",
	description:"Help with bot commands",
	usage: "f-help",
	accessableby: "Members",
	aliases: []
};

