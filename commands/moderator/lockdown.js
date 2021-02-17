const Discord = module.require("discord.js");

exports.run = async(client, message, args) => {
   if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#ff99dd", description: "Nii-Chan Gaboleh Pake Command Ini Baka!!"}}).then(m => {
      setTimeout(() => {
        m.delete()
      }, 2000)
    })
  }

   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}

exports.help = {
  name: "lockdown",
  description: "Untuk Mengabarkan Informasi Ke Luar Channel",
  usage: "np!announce [pesan]",
  example: "np!announce ada nitrod gratis"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}