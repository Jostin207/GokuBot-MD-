let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `💌 *Que Nombre Deseas Ponerme?*`
  try {
    await conn.updateProfileName(text)
    m.reply('✅️ *Nombre Cambiado Con Éxito*')
  } catch (e) {
    console.log(e)
    throw `🤍 Ocurrió Un Error¡!`
  }
}
handler.help = ['nuevonombre <teks>']
handler.tags = ['owner']
handler.command = /^(nuevonombre|cambianombre)$/i

handler.owner = true
export default handler