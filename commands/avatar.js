const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'avatar',
	description: 'Show someones avatar.',
	execute(message, args) {
			const member = message.mentions.users.first()
			const embed = new MessageEmbed()
			  .setTitle(`Here\'s the requested avatar`)
			  .setColor(0xffffff)
			  .setDescription(`This is ${member} avatar.`)
			  .setThumbnail(member.displayAvatarURL({format: 'png', dynamic: true}));
			message.channel.send(embed);
	},
};