module.exports = {
	name: 'clear',
	description: 'Clear the last message\'s!',
	execute(message) {
		const messageArray = message.content.split(' ');
        const args = messageArray.slice(1);

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
        
        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please enter a number only!') }

        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(1);
        message.channel.bulkDelete(deleteAmount, true);
	},
};