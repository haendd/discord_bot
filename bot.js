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


setInterval(degenkicker, 60000);


function degenkicker(){
    console.log('running');
     //try {
         const role = bot.guilds.cache.get('610160412729671693').roles.fetch('752945665763704843');
         const degens = role.members;
         degens.forEach(degen => {
                 if (degen.joinedAt > Date.now().setMinutes(1)) {
                     console.log('kick: ' + degen.displayName)
                     // degen.kick();
                 } else {
                     console.log('oof');
                 }
             }
         );
     //} catch (error) {

     //}

}

bot.login(token);





