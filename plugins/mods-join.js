let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🍟 Ingresa el enlace del Grupo.\nEjemplo: ${usedPrefix + command} ${gp1}`, m, rcanal)
let [_, code] = text.match(linkRegex) || []
if (!code) return conn.reply(m.chat, 'Enlace invalido.', m, rcanal)
let res = await conn.groupAcceptInvite(code)
conn.reply(m.chat, `🚩 Me uní correctamente al Grupo *${res}*`, m, rcanal)
}
handler.help = ['join <link>']
handler.tags = ['mods']
handler.command = ['join', 'entrar'] 
handler.mods = true

export default handler