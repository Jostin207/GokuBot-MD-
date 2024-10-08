let media = [imagen1, imagen2, imagen3].getRandom()
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*CUENTAS OFICIALES DE GOKUBOT-MD*

--------------------

🗃️ *GitHub Del Bot*

*${md}*

--------------------

💌 *Instagram Del Propietario*

*${ig}*

--------------------

🚀 *Youtube Del Propietario*

*${yt}*

--------------------

🗣️ *Grupo OFC De GokuBot-MD*

*${gp1}*

--------------------

👻 *TikTok Del Bot*

*${tiktok}*

--------------------`

await conn.sendFile(m.chat, imagen3, 'luffy.jpg', str, fkontak, null, rcanal)}

handler.tags = ['main']
handler.command = /^cuentasoficiales|cuentasofc|cuentas$/i
handler.exp = 35
handler.register = true
export default handler