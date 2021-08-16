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
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!channel || channel.type !== "voice") return message.channel.send("❌ | Invalid channel specified!");
    if (!channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | I need `CREATE_INSTANT_INVITE` permission");

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "7773336526917861400", // betrayal
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
            if (invite.error || !invite.code) return message.channel.send("❌ | Could not start **Betrayal**!");
            const Embed = new Discord.MessageEmbed()
    .setAuthor(`Betrayal`, client.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`__${message.author.username}, Started Betrayal__`)
    .setDescription(`> [**Join Betrayal**](https://discord.gg/${invite.code})`) // send ur invite code for me its invite.code
    .setColor(`RED`)
            message.channel.send(Embed);
        })
        .catch(e => {
            message.channel.send("❌ | Could not start **Betrayal**!");
        })
};

module.exports.help = {
	name: "betrayal",
	description: "This command is used for starting betrayal session.",
	usage: "b-betrayal <channelid>",
	accessableby: "Member",
	aliases: ["btl"]
};