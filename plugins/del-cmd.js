var handler = async (m, {conn, usedPrefix, text, command}) => {

let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) return conn.reply(m.chat, `• Ingrese el codigo de asignación, si no sabe cuales son, use este comando. #listcmd`, m, rcanal)

let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '• Solo el cresdor del bot puede usar esta funcion.', m )
delete sticker[hash]
conn.reply(m.chat, `✅ *Comando Eliminado correctamente*`, m, rcanal)

}
handler.tags = ['database']
handler.help = ['delcmd']
handler.command = ['delcmd', 'eliminarcmd']

handler.rowner = true

export default handler