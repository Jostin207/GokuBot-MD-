import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 350
let handler = async (m, { conn, text, isPrems, isOwner, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, 'Etiqueta el mensaje que contenga el resultado de YouTube Play.', m, rcanal)
if (!m.quoted.text.includes(`${packname}`)) return conn.reply(m.chat, 'Etiqueta el mensaje que contenga el resultado de YouTube Play.', m, rcanal)
if (!m.quoted.isBaileys) return conn.reply(m.chat, 'Etiqueta un mensaje mio que contenga el resultado de YouTube Play.', m, rcanal)
let urls = m.quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply('×')
if (urls.length < text) return conn.reply(m.chat, 'Resultado no Encontrado.', m, rcanal)
let q = urls[1] || '480p'
try {
await m.react(rwait)
const yt = await fg.ytv(urls[0], q)
let { title, dl_url, size } = yt 

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal) 

conn.reply(m.chat, `⏱️ *Descargando El Video*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
await m.react(done)
} catch {
try {
let yt = await fg.ytmp4(urls[0], q)
let { title, size, dl_url } = yt

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal) 

await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: fkontak })
await m.react(done)
} catch {
await m.reply(`✘ Ocurrío un error`)
}}}
handler.help = ['Video']
handler.tags = ['downloader']
handler.customPrefix = /^(1|Video|video)/
handler.command = new RegExp

export default handler