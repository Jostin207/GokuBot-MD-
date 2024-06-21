let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/553daf0dbd34612a197bc.jpg'
const format = sizeFormatter({ std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })
let timestamp = speed()
let latensi = speed() - timestamp
let _muptime = process.uptime() * 1000
let muptime = clockString(_muptime)
let chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])

let img = 'https://qu.ax/ZzOO.jpg'
let speed = `☘️ *${global.botname}*
🚀 *Velocidad:*
→ ${latensi.toFixed(4)}

🕒 *Activo Durante:*
→ ${muptime}

💫 *Chats:*
→ ${chats.length} *Chats privados*
→ ${groups.length} *Grupos*

🏆 *Servidor:*
➤ *Ram ⪼* ${format(totalmem() - freemem())} / ${format(totalmem())}`
await conn.sendFile(m.chat, 'yoshi.jpg', speed.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: packname,
body: namechannel,
mediaType: 1,
sourceUrl: redesYoshi,
thumbnailUrl: img
}}
}, { mentions: m.sender })
m.react('✈️')

}
handler.help = ['speed']
handler.command = ['speed', 'velocidad']
handler.register = true
handler.tags = ['info']

export default handler