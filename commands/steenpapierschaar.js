const random = require('random')

module.exports = {
	name: 'sps',
	description: 'Speel steen papier schaar met Ventius',
	execute(message, args) {
        let sps = ["steen", "papier", "Schaar", "steen", "papier", "Schaar", "steen", "papier", "Schaar"];
        var numRandom = random.int((min = 0), (max = 8));
        var answer = sps[numRandom];
        const win = "je hebt gewonnen";
        const loss = "je hebt verloren";
        const tie = "het is gelijkspel";
         
        


        if (args[0] === "steen" && answer === "schaar") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(win);
        }

        else if (args[0] === "steen" && answer === "papier") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(loss);
        }

        else if (args[0] === "steen" && answer === "steen") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(tie);
        }

        else if (args[0] === "papier" && answer === "steen") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(win);
        }
        else if (args[0] === "papier" && answer === "schaar") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(loss);
        }
        else if (args[0] === "papier" && answer === "papier") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(tie);
        }
        else if (args[0] === "schaar" && answer === "papier") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(win);
        }
        else if (args[0] === "schaar" && answer === "steen") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(loss);
        }
        else if (args[0] === "schaar" && answer === "schaar") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(tie);
        }
        else if (args[0] === "pistool") {
            message.channel.send(`${args[0]} VS ${answer}`);
            message.channel.send(`${win} want een pistool wint altijd!`);
        }
        else {
            message.channel.send('Verkeerde invoer. sps <steen, papier, schaar>')
        }
	},
};