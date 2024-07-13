let handler = async (m, { conn, command, usedPrefix }) => {
    let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  global.vid = rlink
  const response = await fetch(vid)
  const gif = await response.buffer()
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• OfcDiego
🍟 *Rol:* Propietario
🚩 *Número:* ${creador}
✨️ *GitHub:* https://github.com/OfcDiego

⁖❤️꙰  *Colaboradores:*

• ArizzVal
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/5215610314499
✨️ *GitHub:* https://github.com/ArizzVal

• elrebelde21
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/573147616444
✨️ *GitHub:* https://github.com/elrebelde21

• AzamiJs
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/5214434703586
✨️ *GitHub:* https://github.com/AzamiJs

• Alba070503
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/59169082575
✨️ *GitHub:* https://github.com/Alba070503

• Galletita-Luffy
🍟 *Rol:* Developer
🚩 *Número:* Wa.me/573218138672
✨️ *GitHub:* https://github.com/galletita-luffy`
await conn.sendFile(m.chat, gif, 'luffy.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
