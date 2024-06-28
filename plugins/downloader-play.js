import fetch from "node-fetch"
import yts from "yt-search"

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text) throw `*Que estás Buscando*\n\n*Ejemplo:*\n*${usedPrefix + command}* Illenium - From The Ashes`
conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
    try {
    let ytmsg  = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐏𝐥𝐚𝐲', orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}
    let yt_play = await search(args.join(" "))
    let img = await (await fetch(`${yt_play[0].image}`)).buffer()
    let txt = `*Emilia* | 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐏𝐥𝐚𝐲\n\n`
       txt += `❥⃝⭑ *𝐍𝐨𝐦𝐛𝐫𝐞:* ${yt_play[0].title}\n\n`
       txt += `❥⃝⭑ *𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧* ${secondString(yt_play[0].duration.seconds)}\n\n`
       txt += `❥⃝⭑ *𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐝𝐨:*  ${yt_play[0].ago}\n\n`
       txt += `❥⃝⭑ *𝐋𝐢𝐧𝐤:* ${'https://youtu.be/' + yt_play[0].videoId}\n\n`
       txt += `Para descargar responde a este mensaje con *Video* o *Audio*.\n⩾═══════⩽✰⩾═══════⩽`
await conn.sendMessage(m.chat, {
text: txt,
contextInfo: { 
forwardingScore: 9999, 
isForwarded: true, 
externalAdReply: {
title: wm,
body: packname,
thumbnailUrl: img,
thumbnail: img,
sourceUrl: redes,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: ytmsg})
//await m.react('✅')
} catch {
await m.reply(`✘ Ocurrío un error`)
}}
handler.help = ['play *<búsqueda>*']
handler.tags = ['downloader']
handler.command = ['play', 'play2']
export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function MilesNumber(number) {
  let exp = /(\d)(?=(\d{3})+(?!\d))/g;
  let rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? ":" : ":") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}