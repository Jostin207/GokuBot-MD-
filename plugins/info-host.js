let handler = async (m, { conn, command }) => {
if (command === 'infinity') {
let txt = `*INFINITY HOST* 🍟

*¿Quieres un hosting para poner tu Bot y no sabes cual usar?*
Pues te presento a *Infinity Host*, un hosting que te ofrece una gran variedad de servicios para poner tus proyectos y que estos estén 24/7 Activos.

🔵 \`\`\`Información del Host\`\`\`

🏳 *PRECIOS*
- *1GB, 100CPU* = 1dolar
- *2GB, 120CPU* = 2dolar
- *3GB, 140CPU* = 3dolar
- *4GB, 175CPU* = 4dolar
- *5GB, 200CPU* = 5dolar

🍭 *Dashboard:* 
• https://dash.infinity-wa.com

🚩 *Panel:*
• https://panel.infinity-wa.com

🍧 *Discord:* 
• https://discord.com/invite/vgfpe4Nwd8

🐢 *Grupo:* 
• https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

*¿Qué esperas para Adquirir sus servicios? Únete a esta familia :)*`
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 1,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `♾️ INFINITY - HOST ♾️`,
"body": `✅ HOSTIN DE CALIDAD ✅`,
"previewType": "PHOTO",
"thumbnailUrl": 'https://qu.ax/EQTd.jpg', 
"sourceUrl": 'https://dash.infinity-wa.com'}}},
{ quoted: fkontak})
}
}
handler.tags =['main'] 
handler.help = ['infinity'] 
handler.command = ['infinity']
handler.register = true
export default handler