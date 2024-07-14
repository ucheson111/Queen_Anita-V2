//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "2349138916225";
global.owner = process.env.OWNER_NUMBER || "2347046026137";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJkMzk3V3cyS0pXckNxSEtCWFRCNGNpU09kNFN0QUZzSysrRDRld1oxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3NwQTN2Z1JmUEhUVHpLSGNUNnNxNXBDVGdtWXVnei9TdktpcllTVGQzbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS2xWb2pSd3hDb1hJSGliaDV6Y2RYZHJYVmdCYTV0dkhOaHJ5N1BIem5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLb1ZudjJ5RndNOTNIZElSdW1lZmltU2krRlZINWZuMUZMc2treno3VEE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJT1AzSjMzZmpUMHpRWWhhaGo0T0tVUTd5dW1laDBIbjNNc2pVY29PbW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFVFBGVG14M3NvY01tWVBmQzJiRzdiOXNPNmp1K1Z4UHVsRnFvWUdqWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0s0UHdjbWxoQzd2dk5YT01EUGR6WWdOQmptNTNVK2FGajZYaGZtVjdVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWhKYWpJK24xalFLM0lXbDNNNmtMOW1pQ1RsUW5lYjJtVWtMRjVBYVdVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxRd0ROY3I3QTEvYlZYSXk5YkpWOVRzcW5CbnJwRC9UME14WEFaSTE2d1QzN1BobE81NzRuWnF3UjFYd0F3NVNLYU9qUWN3djYxRFhEZzhiY0xtY0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJhQkgrTmphd2R0UmxYekxSazhmTjVxNGQ4aVdLOHcxSy8xczdlT0xmVTFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyME90MExvb1M5V1RyeDZSaGtDNEpBIiwicGhvbmVJZCI6ImFlZDM3MDU4LTQ5N2MtNDBmMi04YjhlLTNjNjA2OWE2NzA4OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxc0hpSzJQaFZPQ05BZlFxNkU2c2E4b0hOV0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmdQZkRocjVKY2YwT3pNKzhrOGlYZUNuYnFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFLSE5SMzVOIiwibWUiOnsiaWQiOiIyMzQ3MDQ2MDI2MTM3OjM2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTGxoNk1GRU16Z3liUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5aklaSllBUTNKUjBza05RckJnUEcvbm9IWXkrYWpvOUtta0lCcE9ISDN3PSIsImFjY291bnRTaWduYXR1cmUiOiJZdG1yMDZrbTYzbmk5KzNuQU9seDQrNFgzN08xV09VamtYUjRLY0JXQjU0TnB1REJpQ3pHaXR4QjQ1bjIzKzhTSWgxak9NdzlGZW53TVAwZkxqMEFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid1NDWC8wQ0R5Slk5MVFDaG1qTEhlRFFYd0dvWWh0YzU1cWVUcnFpczhkYUdUWkxialJyVEdtS205TE9Nd3BzaElJRHA2TXNyVEtURnU5YTUzVFZ3Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ2MDI2MTM3OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZZeUdTV0FFTnlVZExKRFVLd1lEeHY1NkIyTXZtbzZQU3BwQ0FhVGh4OTgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4NzMwNDh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "SMILE_MD",
  author: process.env.PACK_AUTHER || "SMILE😊",
  packname: process.env.PACK_NAME || "MD",
  botname: process.env.BOT_NAME || "SMILE-MD",
  ownername: process.env.OWNER_NAME || "SMILE😊🦅",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
