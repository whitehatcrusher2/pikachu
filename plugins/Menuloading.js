const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "*For loading menu*"
 const code = "꧂               ㄱ\n꧂ *_ʟᴏᴀᴅɪɴɢ_*... \nㄴ             ꧁" 
{
    
      Asena.addCommand({pattern: 'menu', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
  }

    
