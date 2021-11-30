require("dotenv").config();
const config = require("./config/config.json");
const Enmap = require("enmap");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const Util = require('discord.js')
require('discord-reply');
const client = new Discord.Client({
	partials: ["MESSAGE", "USER", "REACTION"],
	disableMentions: "everyone"
});
const disbut = require('discord-buttons');
disbut(client);
const DisTube = require("distube");

client.config = config;
global.client = client;
client.login(process.env.TOKEN);
global.nowyear = new Date().getFullYear();
global.emojis = require("./config/emoji.json");

const db = require("quick.db");
const { GiveawaysManager } = require("discord-giveaways");

const nz_date_string = new Date().toLocaleString("en-US", {
	timeZone: "Asia/Hong_Kong"
});

client.commands = new Discord.Collection();
client.slcommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.emotes = emojis;
client.colors = client.config.colors;
client.snipes = new Map();
client.mapss = new Map();
client.mapss.set("uptimedate", nz_date_string);

["command", "event", "music"].forEach(x =>
	require(`./handlers/${x}.js`)(client)
);
["alwaysOn", "http"].forEach(x => require(`./server/${x}`)());

client.settings = new Enmap({
	name: "settings",
	fetchAll: false,
	autoFetch: true,
	cloneLevel: "deep"
});

client.moderationdb = new Enmap("moderation");

client.distube = new DisTube(client, {
	leaveOnFinish: true,
	leaveOnEmpty: true,
	leaveOnStop: true,
	youtubeDL: false,
	updateYouTubeDL: true,
	
});

if (!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
	async getAllGiveaways() {
		return db.get("giveaways");
	}

	async saveGiveaway(messageID, giveawayData) {
		db.push("giveaways", giveawayData);
		return true;
	}

	async editGiveaway(messageID, giveawayData) {
		const giveaways = db.get("giveaways");
		const newGiveawaysArray = giveaways.filter(
			giveaway => giveaway.messageID !== messageID
		);
		newGiveawaysArray.push(giveawayData);
		db.set("giveaways", newGiveawaysArray);
		return true;
	}

	async deleteGiveaway(messageID) {
		const newGiveawaysArray = db
			.get("giveaways")
			.filter(giveaway => giveaway.messageID !== messageID);
		db.set("giveaways", newGiveawaysArray);
		return true;
	}
};

client.giveawaysManager = new GiveawayManagerWithOwnDatabase(client, {
	storage: false,
	updateCountdownEvery: 10000,
	endedGiveawaysLifetime: 30000,
	hasGuildMembersIntent: false,
	default: {
		botsCanWin: false,
		exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
		embedColor: "#ff6969",
		embedColorEnd: "#505050",
		reaction: "🎉"
	}
});

client.status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${
		queue.filter || "Off"
	}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode == 2
				? "All Queue"
				: "This Song"
			: "Off"
	}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

client.ws.on("INTERACTION_CREATE", async interaction => {
	if (!client.slcommands.has(interaction.data.name)) return;
	try {
		client.slcommands.get(interaction.data.name).execute(interaction);
	} catch (error) {
		console.log(
			`Error from command ${interaction.data.name} : ${error.message}`
		);
		console.log(`${error.stack}\n`);
		client.api.interactions(interaction.id, interaction.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "Sorry, error occurred when running this command!"
				}
			}
		});
	}
});
client.on("message", async message => {
   
		  if(message.author.bot) return
		  if(message.content.includes("@everyone")){return}
		  if(message.content.includes("@here")){return}
		  
		  if (message.mentions.has(client.user.id) && !message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
			try {message.channel.startTyping();
			fetch(`http://api.brainshop.ai/get?bid=160117&key=AmxzVOo74jyHpdxp&uid=${message.author.id}&msg=${encodeURIComponent(message.content)}`)
				.then((res) => res.json())
				.then((body) => {
					
				  message.lineReply(body.cnt);
				  message.channel.stopTyping();
				});
			}catch(error){
				message.channel.stopTyping();
				return message.channel.send(`Chatbot is having problems at the moment`)
				}
		  }
		
	  


	  }
	);

