import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('👑 Ingresa un texto para realizar la búsqueda.')
try {
conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
m.react(rwait)
let { dl_url } = await Scraper.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `💌 *Resultados De:* ${text}\n${global.textbot}`, m, null, rcanal)
m.react(done)
} catch {
m.react(error)
}}
handler.help = ['pinterest <texto>']
handler.tags = ['buscador', 'descargas']
handler.command = ['pinterest']
handler.limit = 1
handler.register = true
export default handler
