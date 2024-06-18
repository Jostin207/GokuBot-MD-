var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = yoshiImg   
let botsito = 'YoshikoBot-MD'     
const bot = `*_☘️ Hola ${nombre}, Me llamo ${botsito} Siempre a disposición para ayudarte ✨️_*

${packname}
*◎ ${creador}*

${redesYoshi}`

await conn.sendFile(m.chat, pp, 'yoshiko.jpg', bot, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|creador)$/i

export default handler