let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `━━━━━━━━》❈《 ━━━━━━━

_Precios servidores Javascript:_

* 1gb ram, 1,5gb almacenamiento, 95% CPU = $1,34 / mes
* 1,5gb ram, 2gb almacenamiento 115% CPU = $2,39 / mes
* 2gb de ram, 2,5gb almacenamiento, 125% CPU = $3,12 / mes

━━━━━━━━》❈《 ━━━━━━━

_*¡¡ATENCIÓN!!*_

_Los precios de los servidores ya vienen con comisión incluida_

━━━━━━━━》❈《 ━━━━━━━

_*METODOS DE PAGO:*_

* Yape Perú, Número: +51913776697

* Paypal, Link: https://www.paypal.me/KurodaC

* Mercado pago argentino, Alias: matias.381.mp

_*🍁 Información del Host-Akira*_

━━━━━━━━》❈《 ━━━━━━━

👑 *Página OFC de Akira-Host:*

https://dash.akira-host.store

━━━━━━━━》❈《 ━━━━━━━

*💯 Panel OFC De Akira-Host:*

https://panel.akira-host.store

━━━━━━━━》❈《 ━━━━━━━

❤️‍🩹 *Comunidad de Akira-Host WhatsApp:*

https://chat.whatsapp.com/HjYvHMNz0s1EwBl8sHs2Bj

━━━━━━━━》❈《 ━━━━━━━

🧡 *Canal de Akira-Host WhatsApp:*

https://whatsapp.com/channel/0029VajfXO7CnA7zhERSe63s

━━━━━━━━》❈《 ━━━━━━━

🗣 _*CREADORES:*_

_Daniel:_

* Wa.me/+51913776697

_Matías:_

* Wa.me/+5492215034412

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363318492622729@newsletter', 
serverMessageId: '', 
newsletterName: 'Akira-Host 🫂' }, 
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `✨ 𝐀𝐊𝐈𝐑𝐀-𝐇𝐎𝐒𝐓 🍂`,
body: `¡¡¡Que Esperas Para Probrarlo!!!`,
"previewType": "PHOTO",
thumbnailUrl: 'https://f.uguu.se/EdMCjMNO.jpg',
sourceUrl: 'https://dash.akira-host.store'}}},
{ quoted: fkontak})
}
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'akirah', 'akirahost', 'hosting']
export default handler