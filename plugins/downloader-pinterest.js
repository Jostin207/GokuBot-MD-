import Scraper from "@SumiFX/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`👑 Ingresa un texto para realizar la búsqueda`)
await m.react(rwait)
try {
let { dl_url } = await Starlights.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*Resultado:* ${text}`, m, null, rcanal)
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['pinterest *<búsqueda>*']
handler.tags = ['img']
handler.command = ['pinterest']
handler.register = true 
handler.limit = 1
export default handler