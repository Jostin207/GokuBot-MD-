let handler = async (m, { conn, command, args, usedPrefix }) => {
let deve = 'Developer'
let staff = `💫 *EQUIPO STAFF*
🥷 *Bot:* ${global.botname}
🪴 *Ofc Bot:* Wa.me/${ofcbot}
☁️ *Versión:* ${global.vs}

👑 *Propietario:*

• OfcDiego
☘️ *Rol:* Propietario
✨️ *Número:* ${creador}
🏆 *GitHub:* https://github.com/Diego-YL-177

💫 *Colaboradores:*

• GataNina-Li
☘️ *Rol:* ${deve}
✨️ *Número:* Wa.me/593968263524
🏆 *GitHub:* https://github.com/GataNina-Li

• elrebelde21
☘️ *Rol:* ${deve}
✨️ *Número:* Wa.me/573147616444
🏆 *GitHub:* https://github.com/elrebelde21

• KatashiFukushima
☘️ *Rol:* ${deve}
✨️ *Número:* Wa.me/51948705559
🏆 *GitHub:* https://github.com/KatashiFukushima

• AzamiJs
☘️ *Rol:* ${deve}
✨️ *Número:* Wa.me/5214434703586
🏆 *GitHub:* https://github.com/AzamiJs

• Alba070503
☘️ *Rol:* ${deve}
✨️ *Número:* Wa.me/59169082575
🏆 *GitHub:* https://github.com/Alba070503

• Danixl.Js
☘️ *Rol:* ${deve}
✨️ *Número:* Wa.me/595983799436
🏆 *GitHub:* https://github.com/DanixlJs`

await conn.sendFile(m.chat, 'https://telegra.ph/file/553daf0dbd34612a197bc.jpg', 'yaemori.jpg', staff.trim(),
fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `💭 Staff Oficial`,
mediaType: 1,
sourceUrl: `${redesYaemori}`,
thumbnailUrl: `${yaemoriImg}`
}}
}, { mentions: m.sender })

}
handler.command = /^(staff|colaboradores)$/i
export default handler