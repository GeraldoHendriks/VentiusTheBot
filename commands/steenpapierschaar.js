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



        switch (args[0], answer) {
            case "steen", "schaar":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(win);
                break;

            case "steen", "papier":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(loss);
                break;

            case "steen", "steen":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(tie);
                break;
            
            case "papier", "steen":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(win);
                break;

            case "papier", "schaar":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(loss);
                break;

            case "papier", "papier":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(tie);
                break;

            case "schaar", "papier":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(win);
                break;
            
            case "schaar", "steen":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(loss);
                break;
            
            case "schaar", "schaar":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(tie);
                break;

            case "pistool":
                message.channel.send(`${args[0]} VS ${answer}`);
                message.channel.send(`${win} want een pistool wint altijd!`);
                break;

            default:
                message.channel.send('Verkeerde invoer. sps <steen, papier, schaar>')
                break;
        };
    },
};