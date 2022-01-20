require("dotenv").config();
const config = require("./config/config.json");
const Enmap = require("enmap");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const { Util }= require('discord.js')
const InvitesTracker = require('@androz2091/discord-invites-tracker');



const client = new Discord.Client({
	partials: ["MESSAGE", "USER", "REACTION"],
	disableMentions: "everyone",
	intents: [
		'GUILDS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
		'GUILD_INVITES',
	],
});
const tracker = InvitesTracker.init(client, {
    fetchGuilds: true,
    fetchVanity: true,
    fetchAuditLogs: true
});



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

["command", "event"].forEach(x =>
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
tracker.on('guildMemberAdd', (member, type, invite) => {

	if(member.guild.channels.cache.find((ch) => ch.name === 'fujiwarainvitetracker')){

	if(type === 'normal'){
		client.channels.cache.get(`921284034355658763`).send(`${member} was invited by ${invite.inviter.username}!`);
	}

	else if(type === 'vanity'){
		client.channels.cache.get(`921284034355658763`).send(`${member} joined using a vanity url!`);
	}

	else if(type === 'permissions'){
		client.channels.cache.get(`921284034355658763`).send(`${member} joined but I can't figure out how you joined because I don't have the "Manage Server" permission!`);
	}

	else if(type === 'unknown'){
		client.channels.cache.get(`921284034355658763`).send(`I can't figure out how ${member} joined the server...`);
	}
	}

});

client.on("messageCreate", async message => {
    
		  if(message.author.bot) return;

		  if(message.content.includes("@everyone")){return}
		  if(message.content.includes("@here")){return}
		  if (message.mentions.has(client.user.id) && !message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
			message.channel.sendTyping();
			try {
			fetch(
				`http://api.brainshop.ai/get?bid=160117&key=AmxzVOo74jyHpdxp&uid=${message.author.id}&msg=${encodeURIComponent(message.content)}`
		)
		
				.then((res) => res.json())
				.then((body) => {
					
				  message.reply(body.cnt);
				  
				});
			}catch(error){return}
		  }
		
	  
	  
	  }
	);







