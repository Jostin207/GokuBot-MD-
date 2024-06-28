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
    let txt = `・₊✧★。..・✫・🎸🎧°⋆♡₊˚ 🔮\n`
    let txt += `🌩 τιτυℓο:\n`
    let txt += `> • ${yt_play[0].title}\n`
    let txt += `> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸\n`
    let txt += `> 🌦 ρυϐℓιϲα∂ο єи:\n`
    let txt += `> • ${yt_play[0].ago}\n`
    let txt += `> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸\n`
    let txt += `> 🍭 єиℓαϲє:\n`
    let txt += `> • ${yt_play[0].url}\n`
    let txt += `> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸\n`
    let txt += `> 🍒 αմԵօɾ:\n`
    let txt += `> • ${yt_play[0].author.name}\n`
    let txt += `> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪──ׅ──ׅ──ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸\n`
    let txt += `> 🧃 cαɳαℓ:\n`
    let txt += `> • ${yt_play[0].author.url}\n`
    let txt += `> ◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪───ׅ──ׅ─ׅ─ׅ┈ ─๋︩︪─◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸`
    let txt += `> 🍇 ժմɾαcíօ́ղ:\n`
    let txt += `> • ${secondString(yt_play[0].duration.seconds)}\n`
    let txt += `・₊✧。..・★🎸🎧°⋆♡₊˚ 🔮\n\n`
    let txt += `> Para descargar responde a este mensaje con *Video* o *Audio*.\n\n`
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