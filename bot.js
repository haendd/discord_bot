const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzUyOTIzMDYxODgzNTAyNjUz.X1esPg.MUlBFOriaMQl_skOSzYZqjFsFOg';

bot.on('ready', () => {
  console.log('this bot is online');
});

bot.on('guildMemberAdd', member => {

    const role = member.guild.roles.cache.find(role => role.name === 'Degen');
    member.roles.add(role);

});


setInterval(degenkicker, 3600000);


async function degenkicker(){
        var guild = await bot.guilds.fetch('610160412729671693');
        var role = await guild.roles.fetch('752945665763704843');
        var degens = role.members;
        degens.forEach(degen => {
                if (Date.now() - degen.joinedAt.getTime() > 86400000 ) {
                    console.log('kick: ' + degen.displayName);
                    degen.kick();
                }
            }
        );
}

bot.login(token);





