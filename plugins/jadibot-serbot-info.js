import ws from 'ws'
import fetch from 'node-fetch'

async function handler(m, { conn: _envio, usedPrefix }) {
const uniqueUsers = new Map()

global.conns.forEach((conn) => {
if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
uniqueUsers.set(conn.user.jid.replace(/[^0-9]/g, ''), conn.user)}})

const message = Array.from(uniqueUsers.values()).map((user, index) => `╭─⬣「 ${packname} 」⬣\n│⁖ฺ۟̇࣪·֗٬̤⃟🌸 *${index + 1}.-* @${user.jid.replace(/[^0-9]/g, '')}\n│❀ *Link:* https://wa.me/${user.jid.replace(/[^0-9]/g, '')}\n│❀ *Nombre:* ${user.name || '𝚂𝚄𝙱-𝙱𝙾𝚃'}\n╰─⬣\n`).join('\n')

const replyMessage = message.length === 0 ? "" : message
const totalUsers = uniqueUsers.size;
const responseMessage = `${` 💙 *S E R B O T - J A D I B O T* 💙\n\n${replyMessage.trim()}`.trim()}`

let img = await (await fetch(`https://telegra.ph/file/feaf7c2729379803d80ea.jpg`)).buffer()

await _envio.sendFile(m.chat, img, 'thumbnail.jpg', responseMessage, m, false, { mentions: _envio.parseMention(responseMessage) })
}

handler.command = ['listjadibot', 'bots']
handler.help = ['bots']
handler.tags = ['jadibot']
export default handler
