import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, '💥 Responde a una *Imagen* o *Vídeo.*', m, rcanal)
  await m.react(rwait)
  try {
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let img = await (await fetch(`${link}`)).buffer()
  let txt = `*乂  T E L E G R A P H  -  U P L O A D E R*  乂\n\n`
      txt += `*» Enlace* : ${link}\n`
      txt += `*» Acortado* : ${await shortUrl(link)}\n`
      txt += `*» Tamaño* : ${formatBytes(media.length)}\n`
      txt += `*» Expiración* : ${isTele ? 'No expira' : 'Desconocido'}\n\n`
      txt += `✨️ *${packname}*`

await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

function formatBytes(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function shortUrl(url) {
        let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        return await res.text()
}

/* import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

var handler = async (m) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '🚩 Responda a una imagen o un video'
conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
m.react(rwait) 
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let info = ` *📎 Enlace:*\n${link}\n
*⚖️ Tamaño:*\n${media.length} bytes\n
*🚀 Expiración:*\n ${isTele ? '☁️ No Expira' : '🛑 Desconocido'}\n
*🍁 Acortado:*\n${await shortUrl(link)}`

m.react(done)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply :{ mediaUrl: yt, mediaType: 2, title: wm, body: team, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link}}})

}
handler.help = ['tourl']
handler.tags = ['transformador']
handler.command = /^(tourl|upload)$/i

handler.limit = true

export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
} */