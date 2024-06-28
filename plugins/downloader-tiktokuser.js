import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.reply(m.chat, '✨️ Ingresa el nombre de usuario de TikTok que deseas buscar.\nEjemplo: *#tiktokuser* Alexa Torrex', m, rcanal)
  await m.react(rwait)
  try {
    let data = await Starlights.tiktokuser(text)

    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let video = data[i]

        let txt = '`乂  T I K T O K  -  D O W N L O A D  乂`\n\n'
            txt += `✩ *Nro* : ${video.nro}\n`
            txt += `✩ *Título* : ${video.title}\n`
            txt += `✩ *Autor* : ${video.author}\n`
            txt += `✩ *Duración* : ${video.duration} segundos\n`
            txt += `✩ *Vistas* : ${video.views}\n`
            txt += `✩ *Likes* : ${video.likes}\n`
            txt += `✩ *Comentarios* : ${video.comments_count}\n`
            txt += `✩ *Compartidos* : ${video.share_count}\n`
            txt += `✩ *Publicado* : ${video.published}\n`
            txt += `✩ *Descargas* : ${video.download_count}\n\n`
            txt += `> ✨️ ${packname}`

        await conn.sendFile(m.chat, video.dl_url, `video_${i + 1}.mp4`, txt, m, null, rcanal)
      }
      await m.react(done)
    } else {
      await m.react(error)
    }
  } catch {
    await m.react(error)
  }
}
handler.tags = ['downloader']
handler.help = ['tiktokuser *<usuario>*']
handler.command = ['tiktokuser', 'tiktokus']
handler.register = true

export default handler