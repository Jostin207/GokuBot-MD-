import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `💌 El grupo no admite contenido *Nsfw.*\n\n> Para activarlo un *Administrador* debe usar el comando */nsfw on*`, m, rcanal)
if (!text) return m.reply('🤍 Ingresa el nombre de la imágen que estas buscando.')
await m.react(rwait)
try {
let { dl_url } = await Starlights.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*Resultados De:* ${text}`, m, null, rcanal)
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['rule34 *<búsqueda>*']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
//handler.limit = 2
handler.group = true 
export default handler