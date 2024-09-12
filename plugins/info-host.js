let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tranquilo, tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🖥️ *Totalmente compatible con GokuBot-MD,* Disfruta al máximo de su potencial en nuestros servidores de alto rendimiento, asegurando una experiencia fluida y de alta calidad. El staff de GokuBot y Superiority Host se encarga de que disfrutes de todas sus funciones al máximo. 💖✨

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://dash.superiority.pro

*🟢 Dashboard:*
https://dash.superiority.pro

⚙️ *Panel*
https://panel.superiority.pro

🧸 *Comunidad de WhatsApp:*
hhttps://chat.whatsapp.com/HZprUWDGFKdCm7QBNXQQRQ

✨ *Grupo General Superiority (Whatsapp)*
https://chat.whatsapp.com/Feg4luP8CgHFFrbD65Wj7B

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VaoRzN0KmCPMFNe3TD1b

🗣📲 *Contacto:*
• wa.me/51918425805

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363220442272685@newsletter', 
serverMessageId: '', 
newsletterName: 'SuperiorityPro-Host ☁️' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `✨️ 𝐒𝐔𝐏𝐄𝐑𝐈𝐎𝐑𝐈𝐓𝐘-𝐇𝐎𝐒𝐓 ✨️`,
body: `¡Un Host Que Promete Crecer!`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/TiBm.jpg',
sourceUrl: 'https://dash.superiority.pro'}}},
{ quoted: fkontak})
}
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'superiority', 'superioritypro', 'hosting']
export default handler