var handler = async (m, { conn, command }) => {

if (command == 'cuentas' || command == 'cuentasoficiales' || command == 'cuentasof') {
let str = `𝖡𝗂𝖾𝗇𝗏𝖾𝗇ido/a 𝖠 𝖫𝖺𝗌 𝖢𝗎𝖾𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺𝗅𝖾𝗌 🗿

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Github Del Bot* 🌟

*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Canal Oficial De GokuBot-MD* 🌻

 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Grupo Oficial De GokuBot-MD* 👑

 *${gp1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Youtube Del Creador* 🗣️

${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Instagram Del Creador* 🌩

${ig}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`

await conn.sendMessage(m.chat, { text: str, contextInfo: { externalAdReply: { title: '', body: wm, thumbnail: imagen2, sourceUrl: '', mediaType: 1, renderLargerThumbnail: true }}})
}

if (command == 'grupos') {
let text = `🔗 *Grupo oficial*

> *GokuBot-MD II*

${gp1}

👑 *Canal Oficial*

> *GokuBot-MD*

${channel}`

conn.reply(m.chat, text, m, rcanal)
}

}
handler.help = ['cuentasoficiales', 'cuentasofc', 'cuentas', 'grupos']
handler.tags = ['info']
handler.command = /^cuentasoficiales|cuentasofc|ctasofc|gpofc$/i

handler.register = true

export default handler