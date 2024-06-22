let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) conn.reply(m.chat, '💌 *Que Nombre Deseas Ponerme?*', m, rcanal)
  try {
    await conn.updateProfileName(text)
    throw conn.reply(m.chat, '✅️ *Nombre Cambiado Con Éxito*', m, null, rcanal)
  } catch (e) {
    console.log(e)
    throw conn.reply(m.chat, '🤍 Ocurrió Un Error¡!', m, null, rcanal)
  }
}
handler.help = ['nuevonombre <teks>']
handler.tags = ['owner']
handler.command = /^(nuevonombre|cambianombre)$/i

handler.owner = true
export default handler