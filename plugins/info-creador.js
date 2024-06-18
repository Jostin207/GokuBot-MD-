var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = yoshiImg        
const bot = `𝑶𝑭𝑪 𝑫𝑰𝑬𝑮𝑶 👑
*${creador}*
༺═──────────────═༻
𝐵𝑂𝑇 𝑂𝐹𝐶
*Wa.me/${ofcbot}*
*༺═──────────────═༻*
𝑴𝑰 𝑪𝑶𝑹𝑹𝑬𝑶
*theyoshikobot@gmail.com*
༺═──────────────═༻
 𝐴𝑆𝐼𝑆𝑇𝐸𝑁𝐶𝐼𝐴
*${asistencia}*
༺═──────────────═༻`

await conn.sendFile(m.chat, pp, 'yoshiko.jpg', bot, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|creador)$/i

export default handler