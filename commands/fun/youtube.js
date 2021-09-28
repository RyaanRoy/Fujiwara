const Discord = require("discord.js");
const fetch = require("node-fetch");
const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "youtube": {
        id: "755600276941176913",
        name: "YouTube Together"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    }
};

module.exports.run = async (client, message, args) => {
    const channel = message.member.voice;
    if (!channel) return message.channel.send("You need to be in a voice channel!");
    if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913", // youtube together
            target_type: 2,
            temporary: false,
            validate: null
        }),
        headers: {
            "Authorization": `Bot ${process.env.TOKEN}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(invite => {
            if (invite.error || !invite.code) return message.channel.send("❌ | Could not start **YouTube Together**!");
            const Embed = new Discord.MessageEmbed()
    .setAuthor(`Youtube Together`, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`__${message.author.username}, Started Youtube Together session__`)
    .setDescription(`> [**Join The Session**](https://discord.gg/${invite.code})`) // send ur invite code for me its invite.code
    .setColor(`RED`)
    .setThumbnail(`https://media.discordapp.net/attachments/832557176492130345/841610264210046976/youtube-logo.png`);
            message.channel.send(Embed);
        })
        .catch(e => {
            message.channel.send("❌ | Could not start **YouTube Together**!");
        })
};

module.exports.help = {
	name: "ytt",
	description: "This command is used for starting yt together session.",
	usage: "b-ytt <channelid>",
	accessableby: "Member",
	aliases: ["youtubetogether","ytt"]
};