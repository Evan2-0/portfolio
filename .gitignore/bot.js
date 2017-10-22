const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzA1ODcxMjU3MzEwNzI0MDk3.DAu2jA.4PVAoz8UjjHKwxlpOzZ9GEvly-M';
const prefix= 'a$'

client.on('ready', () => {
    console.log('Hey Am i Human? can i be?');

});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'avatar')) {
          message.channel.send({
              embed: new Discord.RichEmbed()
              .setImage(`${message.author.avatarURL}`)
              .setColor(EmbedColor)
              .setFooter(`${message.author.username} | ${message.guild.name} | ${dateFormat(message.createdAt)}`, message.author.avatarURL)
            }             
   else if (message.content === 'a~ping') {
       message.channel.sendMessage('pong');
     }

    else if (message.content === 'Arbor') {
      message.channel.sendMessage('Yes?');
    }
    else if (message.content === 'Nothing') {
      message.channel.sendMessage('Oh Okay See Ya later.');
    }
    else if (message.content === 'Hello Arbor') {
      message.channel.sendMessage('Hello how are you?');
    }
    else if (message.content === 'Good You?') {
      message.channel.sendMessage('thats awesome to know! but yeah Im doing good not breaking so yeah.');
    }
    else if (message.content === 'Im not doing so well') {
      message.channel.sendMessage('Oh sorry about that i hope Ill make your day.');
    }
    else if (message.content === 'Arbor come back') {
      message.channel.sendMessage('Oh Hi. You needed me?');
    }
    else if (message.content === 'Arbor do you have self bot or something?') {
      message.channel.sendMessage('sadly no just pre made conversations');
    }
    else if (message.content === 'Hey Arbor How do i ask for help?') {
      message.channel.sendMessage('&? is the command for Help');
    }

   else if (message.content === '.ads') {
       message.channel.sendMessage('.ads');
     }



    else if (message.content === 'a~?') { /* Help command */
          message.channel.sendMessage('',{embed: new Discord.RichEmbed().setTitle('List Of Commands,1.&ping 2.&? 3.&avatar 4.&invite 5.&ban 6.&kick 7.&author 8.&server') });
      }



      else if (message.content === 'a~server') { /* Avatar command */
            message.channel.sendMessage('',{embed: new Discord.RichEmbed().setTitle('Members:' + message.guild.memberCount +" "+ 'Guild Name:' + message.guild.name +" "+ 'Guild ID:' + message.guild.id) });

          }
       else if (message.content === 'a~invite') { /* Help command */
        message.channel.sendMessage('',{embed: new Discord.RichEmbed().setTitle('invite me to your guild here <https://discordapp.com/oauth2/authorize?&client_id=305871257310724097&scope=bot> also come on over to my support guild here! <https://discord.gg/ReFQ8Qj>') });
    }

    else if (message.content.startsWith('a~ban')) {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(':x: Error you do not have BanMembers permissions ask an admin maybe there is a problem please contact a developer if there is not an issue with your perms!');
        }

        let user = message.mentions.users.first();
        if (!user) {
            return message.channel.send(':x: Please mention a user to ban!');
        }

        message.guild.ban(user.id).catch(console.error).then(() => {
            message.channel.send(`Banned ${user.username}`)
        });
     }
     else if (message.content.startsWith('a~kick')) {
         if (!message.member.hasPermission('KICK_MEMBERS')) {
             return message.channel.send(':x: Error you do not have KickMembers permissions ask an admin maybe there is a problem please contact a developer if there is not an issue with your perms!');
         }

         let user = message.mentions.users.first();
         if (!user) {
             return message.channel.send(':x: Please mention a user to kick!');
         }

        message.guild.members.get(user.id).kick().catch(console.error).then(() => {
             message.channel.send(`Kicked ${user.username}`)
         });
      }
      else if (message.content === 'a~author') { /* Help command */
       message.channel.sendMessage('',{embed: new Discord.RichEmbed().setTitle('My parents are Evan#6244 And Katten#5233, DM them for any questions or comments!') });
   };
});

     client.on('guildCreate', guild => {
guild.Channel.send(`Hey I am Arbor My Parents are Evan#6244 and Katten#5233 They both developed me DM them for any questions or for any questions or comments! also do &? &is my command prefix &? gives you a list of my helpful commands!`);
});

client.guilds.forEach(function(guild,index,arr){guild.channels[0].sendMessage('hi')})
client.on('guildMemberAdd', member => { /* On member join */
    member.guild.Channel.send(`Welcome to the server, ${member}!`);
    // Create an event listener for new guild members
client.user.setgame(`TESTING first time doing this`)

});

client.login(token);
