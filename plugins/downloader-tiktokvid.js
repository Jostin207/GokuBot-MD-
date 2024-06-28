import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) return conn.reply(m.chat, '✨️ Ingresa un texto junto al comando.\nEjemplo: *${usedPrefix + command}* Emilia Re:zero Edit`, m, rcanal)
  await m.react(rwait)
  try {
    let { title, author, duration, views, likes, comments_count, share_count, download_count, published, dl_url } = await Starlights.tiktokvid(text)

      let txt = '`乂  T I K T O K  -  D O W N L O A D  乂`\n\n'
          txt += `✩ *Título* : ${title}\n`
          txt += `✩ *Autor* : ${author}\n`
          txt += `✩ *Duración* : ${duration} segundos\n`
          txt += `✩ *Vistas* : ${views}\n`
          txt += `✩ *Likes* : ${likes}\n`
          txt += `✩ *Comentarios* : ${comments_count}\n`
          txt += `✩ *Compartidos* : ${share_count}\n`
          txt += `✩ *Publicado* : ${published}\n`
          txt += `✩ *Descargas* : ${download_count}\n\n`
          txt += `> ✨️ ${packname}`

      await conn.sendFile(m.chat, dl_url, `thumbnail.mp4`, txt, m)
      await m.react(done)

  } catch {
    await m.react(error)
  }
}
handler.help = ['tiktokvid *<búsqueda>*']
handler.tags = ['downloader']
handler.command = ['ttvid', 'tiktokvid']
handler.register = true

export default handler