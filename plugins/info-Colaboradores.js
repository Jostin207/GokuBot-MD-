let handler = async (m, { conn, command, usedPrefix }) => {
let pp = `https://telegra.ph/file/c366c44e1efae9417a46d.jpg`
let staff = `💫 *EQUIPO STAFF*
🥷 *Bot:* ${global.botname}
☁️ *Versión:* ${global.vs}

👑 *Propietario:*

• Diego-YL-177
☘️ *Rol:* Propietario
✨️ *Número:* ${creador}
🏆 *GitHub:* https://github.com/Diego-YL-177

💫 *Colaboradores:*

• GataNina-Li
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/593968263524
🏆 *GitHub:* https://github.com/GataNina-Li

• elrebelde21
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/573147616444
🏆 *GitHub:* https://github.com/elrebelde21

• KatashiFukushima
☘️ *Rol:* Developer
✨️ *Número:* Wa.me/51948705559
🏆 *GitHub:* https://github.com/KatashiFukushima

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

//await conn.sendFile(m.chat, pp, 'yoshiko.jpg', staff, estilo)}

await conn.sendMessage(m.chat, { image: pp, gifPlayback: false, caption: staff, mentions: [m.sender, global.conn.user.jid] }, { quoted: fakeChannel }) 

ler canalesInfo = [
{ link: channel, id: "120363160031023229@newsletter", name: "INFINITY-WA 💫" },
{ link: channel2, id: "120363169294281316@newsletter", name: "GB - UPDATE ✨" },
{ link: channel3, id: "120363203805910750@newsletter", name: "Tips sobre GataBot 🤩" } 
]
let indiceAleatorio = Math.floor(Math.random() * canalesInfo.length)
let channelRD = canalesInfo[indiceAleatorio]

let fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: yoshiImg, thumbnail: imagen1, sourceUrl: redesYoshi }}}, { quoted: m }

handler.command = /^(staff|colabs|colaboradores)$/i
export default handler
