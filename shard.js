require("dotenv").config();

const { ShardingManager } = require("discord.js");

const shard = new ShardingManager("./index.js", {
	token: process.env.TOKEN,
	totalShards: "auto"
});

shard.on("launch", shard => {
	console.log(
		`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${
			shard.id
		}`
	);
});

shard.on("messageCreate", (shard, msg) => {
	console.log(
		`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${
			msg._eval
		} | ${msg._result}`
	);
});

shard.spawn();
