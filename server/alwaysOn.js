const fetch = require("node-fetch");
function alwaysOn() {
	setInterval(async () => {
		await fetch("http://localhost:3000").then(console.log("Pingeb-"));
	}, 240000);
}

module.exports = alwaysOn;
