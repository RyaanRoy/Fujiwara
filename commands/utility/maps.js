const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    const sit = args.join(" ");
    if (!args.length) return message.reply("Provide a valid location");
    const site = `https://maps.google.com/?q=${args.join("+")}`;
    try {
      const msg = await message.reply(
        "**Please wait...** This may take up to 10 seconds."
      );
      msg.delete({ timeout: 5000 });
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
      let att = new Discord.MessageAttachment(body, `${sit}.png`);
      return message.reply({files:[att]});
    } catch (err) {
      return message.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
};

module.exports.help = {
	name: "maps",
	description: "This command is used for getting info on google maps.",
	usage: "f-maps <query>",
	accessableby: "Member",
	aliases: ["gmaps","map"]
};