import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 100
let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
if (!m.quoted) return m.reply('Etiqueta el mensaje que contenga el resultado de YouTube Play.')
if (!m.quoted.text.includes("𝗘𝗺𝗶𝗹𝗶𝗮 𝗥𝗲:𝘇𝗲𝗿𝗼 | 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗔𝘂𝗱𝗶𝗼")) return m.reply('Etiqueta el mensaje que contenga el resultado de YouTube Play.')
if (!m.quoted.isBaileys) return m.reply('Etiqueta un mensaje mio que contenga el resultado de YouTube Play.')
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply('×')
if (urls.length < text) return m.reply('Resultado no Encontrado.')
let q = '128kbps'
try {
const yt = await fg.yta(urls[0], q)
let { title, dl_url, size } = yt 

if (size.split('MB')[0] >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`) 
conn.reply(m.chat, `Descargando Audio. . .`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: adsearch,
body: author,
previewType: 0, thumbnail: miniurl3,
sourceUrl: redesYaemori }}})

await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: fkontak })
//await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(urls[0], q)
let { title, size, dl_url } = yt

if (size.split('MB')[0] >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`) 

await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: fkontak })
//await m.react('✅')
} catch {
await m.reply(`✘ Ocurrío un error`)
}}}
handler.help = ['Audio']
handler.tags = ['downloader']
handler.customPrefix = /^(Audio|audio)/
handler.command = new RegExp

export default handler