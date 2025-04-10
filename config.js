const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Eldoret/Kejya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718835933";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "recordin" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_25_04_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklRRUphSEZRbXpOZThtdDhIQ0hqQ01zbk9ONHFTOGRDaXlCZTdrNm9QUzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZKQmlBYUhvUnNHWEtLV2VSUWYwZ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWZkYzZkZGUtNzBhYy00NTQwLWI0ZTMtODhjY2I1NWYzOWI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMjE5LFxuICAgICAgNixcbiAgICAgIDMsXG4gICAgICAyMDEsXG4gICAgICAxNjcsXG4gICAgICA5LFxuICAgICAgMjAzLFxuICAgICAgODYsXG4gICAgICA3NSxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAxNDYsXG4gICAgICAxNzIsXG4gICAgICAwLFxuICAgICAgNjgsXG4gICAgICAxNTQsXG4gICAgICAxMzEsXG4gICAgICAxMixcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDI1LFxuICAgICAgMzYsXG4gICAgICAxNTYsXG4gICAgICAxNTQsXG4gICAgICA4OSxcbiAgICAgIDUzLFxuICAgICAgMTMxLFxuICAgICAgNDIsXG4gICAgICAyMDksXG4gICAgICAxNDIsXG4gICAgICAxODQsXG4gICAgICA2MSxcbiAgICAgIDEzMSxcbiAgICAgIDE3NyxcbiAgICAgIDExNyxcbiAgICAgIDE4MSxcbiAgICAgIDEzLFxuICAgICAgMzcsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJONkNMQURBUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE4ODM1OTMzOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1OTQyNTc3MTUyMDA5NTo0NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJand1c0VCRU0rcDM3OEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImU0QjFBbkw2bk1RWXJMUDQwSlY5d2FnbW9sWVY5TkF0RlY0ZWV2UitQQ289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiemZ2UTNhUG9vYTVJa21tMzExTE5mWERyeThSUE1tb0d3Q2NqTnZ1V2JlZVcrSFNLSHErUDBJdWU4NHRNSkxwdk1UbXo0U1hVRmxVZVRLclZIK004Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKzIzSWpzODBkYVVCMzQyU1VjeTloOGhjcmxWUU0ySWo2Rjc2L0EvOTJtWWpxU09lYkxnRnJwenIrNmNkTnJ5b3NiUmlSdDNDQmt1QU5FZDBZbmV6aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE4ODM1OTMzOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0Mjk1MTI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWRqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1cU04a1dpaGNTZmxDRXRQa0dLaXVqK0lOb3YxYWtlUTVkbXNHMGZYYitJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwNTcxNDk0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDIwMTg2ODcwMVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "EMINEM", 



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
