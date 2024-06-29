import axios from "axios";

let handler = async (m, { conn, usedPrefix, text }) => {
if (!text) return conn.reply(m.chat, '*🚩 𝙸𝚗𝚐𝚛𝚎𝚜𝚊 𝚕𝚘 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊𝚜 𝚋𝚞𝚜𝚌𝚊𝚛 𝚎𝚗 𝚃𝚒𝚔𝚃𝚘𝚔.*', m, rcanal)
await m.react(rwait)
try {
let response = await axios.get(`https://delirius-api-oficial.vercel.app/api/tiktoksearch?query=${encodeURIComponent(text)}`)
let results = response.data.meta
if (!results.length)
return conn.reply(m.chat, 'No se encontraron resultados, intenta con un nombre más corto.', m, rcanal).then((_) => m.react(error))
let txt = `✰  *BUSQUEDAS - TIKTOK*  ✰\n\n`
for (let i = 0; i < (30 <= results.length ? 30 : results.length); i++) {
let video = results[i]
txt += `\n`
txt += `✰ *Titulo:* ${video.title}\n`
txt += `✯ *Duración:* ${video.duration} segundos\n`
txt += `✰ *Link:* ${video.url}\n`
txt += `✰ *Autor:* ${video.author.username || "×"}\n`
txt += `✰ *Views:* ${video.play}\n`
txt += `✰ *Corazones:* ${video.like}\n\n`
}
const url = 'https://i.imgur.com/BO4TfMR.png'
const responseImg = await axios.get(url, { responseType: 'arraybuffer' })
await conn.sendFile(m.chat, responseImg.data, "thumbnail.png", txt, m, rcanal)
await m.react(done)
} catch (e) {
console.error(e)
conn.reply(m.chat, '😺 Ocurrió un error al buscar en TikTok.', m, rcanal)
m.react(error)
}}

handler.help = ['tiktoksearch']
handler.tags = ['buscador']
handler.command = ['tiktoksearch', 'tiks']
handler.register = true
export default handler