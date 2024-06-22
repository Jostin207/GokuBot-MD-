let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) conn.reply(m.chat, '💌 *Que Nombre Deseas Ponerme?*', m, rcanal)
  try {
    await conn.updateProfileName(text)
    conn.reply(m.chat, '✅️ *Nombre Cambiado Con Éxito*', m, rcanal)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, '🤍 Ocurrió Un Error¡!', m, rcanal)
  }
}
handler.help = ['nuevonombre <teks>']
handler.tags = ['owner']
handler.command = /^(nuevonombre|cambianombre)$/i

handler.owner = true
export default handler