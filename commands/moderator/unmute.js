exports.run = async (client, message, args) => {
   if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "#ff99dd", description: "Nii-Chan Gaboleh Pake Command Ini Baka!!"}}).then(m => {
      setTimeout(() => {
        m.delete()
      }, 2000)
    })
  }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User do not have mute role so what i am suppose to take")
    }
    
    
    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** is unmuted`)
    
    user.send(`You are now unmuted from **${message.guild.name}**`)

  }

exports.help = {
  name: "unmute",
  description: "Slowing down the channel.",
  usage: "slowmode [channel] <time>",
  example: "slowmode #general 5s \nslowmode 5.25 hrs"
}

exports.conf = {
  aliases: [],
  cooldown: 10
}