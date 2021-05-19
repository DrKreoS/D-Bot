const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./settings.json');
var prefix = '/';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix+'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if (msg.content.startsWith(prefix+'play')) {
    var link = msg.content.substring(6,msg.content.lenth);
    const ytdl = require('ytdl-core');
    const channel = client.channels.cache.get("350672844218302464");
      if (!channel) return console.error("The channel does not exist!");


      channel.join().then(connection => {
        const stream = ytdl( link , { filter: 'audioonly' });
	const dispatcher = connection.play(stream);

	dispatcher.on('finish', () => voiceChannel.leave());

          console.log("Successfully connected.");
      }).catch(e => {
          console.error(e);
      });
  }
  if (msg.content.toLowerCase() === prefix+'leave') {
    channel.leave();
  }
});
client.login('ODQyNzExMTkxMTQ2NDYzMjUz.YJ5R9A.22bnBtv8ONSpmVI2RFkY5jkg57g');
