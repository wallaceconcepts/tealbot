var Discord = require("discord.js");

var bot = new Discord.Client();
bot.on("message", function(message)
{
	if(message.content ==="!keem")
		{
			var my_array = ["http://i.imgur.com/ZgsfWPA.jpg","http://i.imgur.com/UFEBv9u.jpg","http://i.imgur.com/FHDQmi0.jpg","http://i.imgur.com/YA2GkMx.jpg","http://i.imgur.com/Nbn3TOo.jpg"];
			var ri = Math.floor(Math.random() * my_array.length);
			bot.sendMessage(message, my_array[ri]);
		}
	if(message.content === "!fallenteal")
		{
			bot.sendMessage(message, "http://i.imgur.com/Uy9BQb9.jpg");
		}
	if(message.content === "!teal2.0")
		{
			bot.sendMessage(message, "http://i.imgur.com/UXI0jKh.jpg");
		}
	if(message.content.indexOf('slav') >= 0)
	 {
			bot.sendMessage(message, "SQUAT");
	}
	if(message.content.indexOf('big whoop') >= 0)
	 {
			bot.sendMessage(message, "BIG WHOOP WANNA FIGHT ABOUT IT? BIG WHOOP WANNA FIGHT ABOUT IT? BIG WHOOP WANNA FIGHT ABOUT IT? BIG WHOOP WANNA FIGHT ABOUT IT? BIG WHOOP WANNA FIGHT ABOUT IT? BIG WHOOP WANNA FI...");
	}
	if(message.content === "!teal")
	 {
			bot.sendMessage(message, "http://i.imgur.com/DnilS7m.png");
	}
	if(message.content === "!slavdance")
	 {
			bot.sendMessage(message, "https://www.instagram.com/p/BAcMPmKMOJe/");
	}
	if(message.content === "!jam")
	 {
		 var my_array = ["http://i.imgur.com/oEnqEoJ.png","http://i.imgur.com/lkWXDR9.jpg","http://i.imgur.com/LtFZRIG.png","http://i.imgur.com/M3jX2MY.png"];
		 var ri = Math.floor(Math.random() * my_array.length);
		 bot.sendMessage(message, my_array[ri]);
	}
});

bot.login("rhyswallaceconcepts@gmail.com","magmic");

bot.on('disconnected', function() {
    bot.login("REDACTED","REDACTED");
});
