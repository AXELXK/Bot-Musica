module.exports = {
  Admins: ["847139015882571826", "847139015882571826"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "¡", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ACA-VA-EL-TOKEN", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "883452707761963029", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "fJ1OBLQRRGnv3KlIzjdyuBdOo06I1cFS", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/872064653667209216/884106921513218078/330d5cbde413acf243832989f899d387.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "b005fe9379e44a96bf354abdd5c35b24", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "67107e3bdfbd4baabbc649350db3925b", //Spotify Client Secret
  },
};
