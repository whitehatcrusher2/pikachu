/* Copyright (C) 2021 AMALSER.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

Amalser - Amal

Wa.me/+919895828468

*/

const Neotro = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

Neotro.addCommand({pattern: 'menu', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

// send a list message!

    const rows = [

        {title: '💌 Setvar', description: "⚙Bot of understanding and basic help.\n\n\n*◁ === 🍃🎯 basic help === ▷*\n\n🎭 *.alive *\n 🔮 Bot testing will occur on operation.\n\n🎭 *.amal*\n🔮 shows complete command list.\n\n🎭 *.owner*\n🔮 BOT owners show details\n\n🎭 *.setvar BOT_NAME: your text*\n🔮 obe boṭge name change is shown in the command and your Logo captions.\n\n🎭 *.setvar WORK_TYPE: public*\n🔮 Bot public to.\n\n🎭 *.setvar WORK_TYPE: private*\n🔮 Bot private to.\n\n🎭 *.restart*\n🔮 Bot revived again when tight\n\n🎭 *.shutdown*\n\n🔮 Bot was closed ⚙️ should be back on in Resources at Heroku on\n\n🎭 *.setvar SUDO: 94XXXXXXXX*\n🔮 Bot to another ruler Based on public / private, he can control both occasions.\n\n🎭 *.dyno*\n What is the amount of hours to your 🔮 Heroku. 550 hours per month from the previous month, while it ended the moment your bot will wait a month off vē.īlaga is to create a new classifieds or heroin.\n\n🎭 *.pinky on*\n\n🔮 AI EVA Chat BOT This can by implemented.\n🎭 *.pinky off* \ n🔮 AI EVA Chat BOT is deactivated.\n\n🎭 *.botname*\n🔮 To change bot name\n\n🎭 *.owncmnd*\n🔮 Owner Menu is making in the.\n⚙️ ahead to enter the relevant details eleven hash. For details\n🧚 *setvar ALIVE_MESSAGE: The MSG is*\n🔮 Bot Alive Message appended to change if we want to.\n\n🎭 *setvar ALIVE_LOGO: link*\n🔮 Bot appended alive picture change is Xolela Photo Link to your Site Upload button in the lower one\n🎲 https: imgbb.com\n🔮 telegram use the Bot easy to leave a link that can get Img\n🎲 https: t.me/FnTelegraphBot\n🎭 *setvar WELCOME_GIF: link*\n🔮 This site down there you Upload a GIF rials to change one's GIF Welcome msg to put a link\n🎲 https: www.mailboxdrive.com\n🎭 *setvar BYE_GIF: link*\n🔮 tied Good bye Logo change, as puluvanuḍa Simple put\n\n ", rowId:" rowid1"},

        {title: '💖 Git', description: "password in youtube.\n\n\n*◁ === 🍃🎯 Youtube link === ▷*\n\nhttps://youtu.be/fd0KPblop-k\n\n ", rowId:"rowid2"},

        {title: '💚 Xmedia', description: "XMEDIA COMMANDS ARE.\n\n\n💻Usage: *.mp4enhance*\nℹ️Desc:Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc:Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc:Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc:Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc:Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc:Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc:Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc:Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc:Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc:Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc: Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc: Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc: Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc: Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc: Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc: Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc: Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc: Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc: 🇹🇷 Ses seviyesini fazalca arttırır.\n🇬🇧 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc: 🇹🇷 Fotoğrafa monochrome efekti uygular.\n🇬🇧 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc: 🇹🇷 Fotoğrafa vintage efekti uygular.\n🇬🇧 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa edge efekti uygular.\n🇬🇧 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc: 🇹🇷 Fotoğrafı daha net hale getirir.\n🇬🇧 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc: 🇹🇷 Fotoğrafın arka planını bulanıklaştırır.\n🇬🇧 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gren efekti uygular.\n🇬🇧 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc: 🇹🇷 Fotoğrafa negatif renk filtresi uygular.\n🇬🇧 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc: 🇹🇷 Fotoğrafa gökkuşağı efekti uygular.\n🇬🇧 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc: 🇹🇷 Fotoğrafın renklerini daha canlı ve çekici yapar.\n🇬🇧 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc: 🇹🇷 Fotoğrafa çizim efekti uygular.\n🇬🇧 Applies a art effect to the photo\n\n ", rowId:" rowid3"},

        {title: 'OWNER ✅️', description: "BOT OWNER.\n\n\nhttp://wa.me/+919895828468\n\n ", rowId:" rowid4"},

        {title: 'Free fire', description: "Free fire logo.\n\n\n*_50 FF LOGO PACK_*\n\n*🧞‍♂️.ff01 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff02 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff03 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff04 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff5 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff6 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff07 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff08 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff09 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff10 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff12 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff13 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff14 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff15 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff16 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff17 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff18 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff19 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff20 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff21 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff22 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff23 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff24 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff25 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff26 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff27 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff28 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff29 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff30 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff31 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff32 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff33 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff34 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff35 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff36 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff37 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff38 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff39 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff40 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff41 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff42 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff43 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff44 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff45 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff46 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff47 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff48 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff49 : Makes FF logo*\n*send free fire logo*\n*🧞‍♂️.ff50 : Makes FF logo*\n*send free fire logo* ", rowId:" rowid5"},

        {title: 'Owner Commands', description: "┌─〔 *_𝑶𝑾𝑵𝑬𝑹-𝑴𝑬𝑵𝑼_* 〕\n┊ \n┊➫ .𝒋𝒊𝒅\n┊➫ .𝒃𝒂𝒏\n┊➫ .𝒔𝒖𝒅𝒐\n┊➫ .𝒎𝒖𝒕𝒆\n┊➫ .𝒔𝒑𝒂𝒎\n┊➫ .𝒊𝒏𝒗𝒊𝒕𝒆\n┊➫ .𝒘𝒉𝒐𝒊𝒔\n┊➫ .𝒕𝒂𝒈𝒂𝒍𝒍\n┊➫ .𝒑𝒖𝒃𝒍𝒊𝒄\n┊➫ .𝒑𝒍𝒖𝒈𝒊𝒏\n┊➫ .𝒅𝒆𝒎𝒐𝒕𝒆\n┊➫ .𝒑𝒓𝒊𝒗𝒂𝒕𝒆\n┊➫ .𝒖𝒏𝒎𝒖𝒕𝒆\n┊➫ .𝒑𝒓𝒐𝒎𝒐𝒕𝒆\n┊➫ .𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌\n└──────────────────〄\n\n ©ᴍᴀ²ᴅ\n\n  ", rowId:" rowid6"}

       ]

       

       const sections = [{title: "© ᴄʀᴀѕʜᴇʀ", rows: rows}]

       

       const button = {

        buttonText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔',

        description: "┌─〔 *_𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝙱𝙾𝚃_* 〕\n┊\n┊➥   ʜᴇͧʀᷤᴍͤɪͬ† ⚚ ᴘɪⷡᴋⷪᴀⷮᴄᷤʜᴜ \n└───────────────〄\n┌───〔 *_𝙳𝙴𝚃𝙰𝙸𝙻𝚂_* 〕\n┊ \n┊♦️ *ʀᴏʟᴇ* : *ᴏғғɪᴄɪᴀʟ*\n┊♦️ *ʟᴇᴠᴇʟ* : *(47 / 69)*\n┊♦️ *ѕᴘᴇᴇᴅ :* *0.1567*\n┊♦️ *ᴘʀᴇғɪx :*〔.#,〕\n┊♦️ *ʙᴀᴛᴛᴇʀʏ* : *𝟿2%*\n┊♦️ *ᴄ / ᴅ : ᴅɪѕᴄʜᴀʀɢɪɴɢ*\n┊♦️ *ᴅᴀᴛᴀʙᴀѕᴇ* *56 ᴏғ 100*\n┊♦️ *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : *𝟺ᴅ𝟺ʀ𝟻ʜ*\n┊♦️ *ʀᴀᴍ :* *40.79MB / 1.8 GB*\n┊♦️ *©ᴍᴀ²ᴅ*\n└──────────────────〄",

        sections: sections,

        listType: 1

       }

       

       await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    

    }));
