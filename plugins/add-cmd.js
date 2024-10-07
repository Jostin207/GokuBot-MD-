var handler = async (m, {conn, text, usedPrefix, command}) => {

global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return conn.reply(m.chat, '*Debes Responder Ah Una Imagen O Sticker*.', m, rcanal)
if (!m.quoted.fileSha256) return conn.reply(m.chat, '♨️ *Solo Se Admiten Inagenes O Stickers*.', m )
if (!text) return conn.reply(m.chat, `🚫 *Error, Te Falto Poner Un texto. Por Ejemplo*:\n${usedPrefix + command} *#menu responder a sticker*`, m, rcanal)

const sticker = global.db.data.sticker
const hash = m.quoted.fileSha256.toString('base64')

if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚫 *Solo El Creador/Staff Del Bot Pueden Usarlo*.', m, rcanal)
sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false}
conn.reply(m.chat, `💾 *Comando Guardado*.`, m, rcanal)
}

handler.tags = ['database']
handler.help = ['setcmd']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']

handler.rowner = true

export default handler