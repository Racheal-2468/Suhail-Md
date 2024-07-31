const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348186441524";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||SUHAIL_20_05_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDkzLFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdxRTFQQTlLcWdQY3FKYkxTMUhyWWdIdXJZV3NzNXQ4VG4zV0VyQVo0S289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlzVmpjTkFPUmEtdG1sYkVGeGUxZVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTkzMTg4YTQtMzlkMC00NGM5LTg1NjItM2JhYWMzYWIyYmFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDQxLFxuICAgICAgNzUsXG4gICAgICAxMDIsXG4gICAgICAxMzYsXG4gICAgICAyMDgsXG4gICAgICA0NyxcbiAgICAgIDE1LFxuICAgICAgMTM4LFxuICAgICAgMzMsXG4gICAgICAxNDcsXG4gICAgICAyMixcbiAgICAgIDk2LFxuICAgICAgMjUyLFxuICAgICAgMjE0LFxuICAgICAgMjA2LFxuICAgICAgMTMxLFxuICAgICAgNzUsXG4gICAgICA0NixcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxMTUsXG4gICAgICA4NCxcbiAgICAgIDc5LFxuICAgICAgMTcsXG4gICAgICAxMDcsXG4gICAgICAyMTgsXG4gICAgICA5MixcbiAgICAgIDQ3LFxuICAgICAgMzIsXG4gICAgICA4MSxcbiAgICAgIDE3MyxcbiAgICAgIDE3NCxcbiAgICAgIDg4LFxuICAgICAgOTcsXG4gICAgICAxNDMsXG4gICAgICAyNDksXG4gICAgICAxMjUsXG4gICAgICAxNDEsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1BDNjhRWTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxODY0NDE1MjQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhY2hlYWwgS29sZW9zaG8gVGhlIEdyb3d0aCBNYWduZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMTA0MzQ4NzUzNTIyMjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lpTWhJY0NFSVRKbXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEd6Q3pLRnlraHlwemdXRFNTTE9VSWt2MGFNZSsvWGM3RWFnQk1OUXhEWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJscmZtWjQ1dkY1YnFXbC9RQmVkL2xXSlZmSkpDdkRONWpMQ2NLYlVXKzNwY0xTcTVKQS93bGRVbTBUMnVDT2xlUEhNMU81Ymg3bXFuMGx6RDJpT1BnQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUWkdxdGZzTlF0UVRCMk5VTmJ5MHlTaWdGRXlNTzYrV01rc0JISjZjVjVrUlFYQjdmOVZHc0tUSTdWakRpNll5WEswM3BHeEJzZTNTWCs0MVJ3OGVBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg2NDQxNTI0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE5NzEyN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0= ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
