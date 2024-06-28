let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/553daf0dbd34612a197bc.jpg'
let img = 'https://qu.ax/ZzOO.jpg'
let staff = `🏆 *EQUIPO DE AYUDANTES*
🥷 *Bot:* ${global.botname}
☁️ *Versión:* ${global.vs}

👑 *Propietario:*

• OfcDiego
☘️ *Rol:* Propietario
✨️ *Número:* ${creador}
🏆 *GitHub:* https://github.com/OfcDiego

💫 *Colaboradores:*

• ArizzVal
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/5215610314499
🏆 *GitHub:* https://github.com/ArizzVal

• elrebelde21
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/573147616444
🏆 *GitHub:* https://github.com/elrebelde21

• AzamiJs
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/5214434703586
🏆 *GitHub:* https://github.com/AzamiJs

• Alba070503
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/59169082575
🏆 *GitHub:* https://github.com/Alba070503

• Danixl.Js
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/595983799436
🏆 *GitHub:* https://github.com/DanixlJs`
await conn.sendFile(m.chat, pp, 'yoshi.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `💭 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: img
}}
}, { mentions: m.sender })
m.react('🌟')

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
