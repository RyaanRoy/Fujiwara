const { NeverHaveIEver } = require("weky");
const Discord = require("discord.js");



module.exports.run = async (client, message, args) => {
    await NeverHaveIEver({
        message: message,
        embed: {
            title: 'Never Have I Ever',
            color: '#5865F2',
            footer: 'Hmmm.....',
            timestamp: true
        },
        thinkMessage: 'Lemme think....',
        othersMessage: 'Only <@{{author}}> can use the buttons!',
        buttons: { optionA: 'Yes', optionB: 'No' }
    }); 

};

module.exports.help = {
	name: "neverhaveiever",
	description:
		"This command is used for asking the nhie questions.",
	usage: "f-neverhaveiever",
	accessableby: "Member",
	aliases: ["nhie"]
};
