let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/553daf0dbd34612a197bc.jpg'
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
await conn.sendFile(m.chat, pp, 'yoshi.jpg', speed.trim(), fkontak, true, {
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
handler.tags = ['info']
handler.command = ['speed']
handler.register = true
export default handler