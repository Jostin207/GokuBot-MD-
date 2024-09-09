let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🌹 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• 𝖩𝗈𝗌𝗍𝗂𝗇207
🌹 *Rol:* Propietario
💖 *Número:* ${creador}
✨️ *GitHub:* https://github.com/𝖩𝗈𝗌𝗍𝗂𝗇207

🌻 *Desarrollador:*

• 𝖮𝖿𝖼.𝖣𝗂𝖾𝗀𝗈
🌹 *Rol:* Desarrollador
💖 *Número:* Wa.me/573012482597
✨ *GitHub:* https://github.com/OfcDiego

⁖❤️꙰  *Colaboradores:*

• 𝖬𝖺𝗍𝗂𝖺𝗌-𝖢𝗋𝗒𝗉𝗍𝗈
🌹 *Rol:* Developer
💖 *Número:* Wa.me/5492215034412
✨️ *GitHub:* https://github.com/𝗆𝖺𝗍𝗂𝖺𝗌-𝖼𝗋𝗒𝗉𝗍𝗈

• 𝖤𝖭𝖹𝖮𝖵𝖠𝖲𝖤𝖫𝖤𝖵𝖨𝖢𝖧 (𝖤𝖭𝖹𝖨𝖳𝖮)
🌹 *Rol:* Developer
💖 *Número:* Wa.me/5491168758497
✨️ *GitHub:* https://github.com/𝖤𝗇𝗓𝗈𝖵𝖺𝗌𝖾𝗅𝖾𝗏𝗂𝖼𝗁

• EnderJs-CreatorGL
🌹 *Rol:* Developer
💖 *Número:* Wa.me/50558124470
✨️ *GitHub:* https://github.com/EnderJs-CreatorGL

• Proximamente
🌹 *Rol:* Developer
💖 *Número:* PROXIMAMENTE
✨️ *GitHub:* PROXIMAMENTE`
await conn.sendFile(m.chat, icons, 'luffy.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🌹 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icons
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
