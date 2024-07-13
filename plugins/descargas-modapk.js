import { search, download } from 'aptoide-scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*• Ingresa el nombre de la aplicación que deseas descargar.*\n\nEjemplo:\n*${usedPrefix + command}* WhatsApp`, m, rcanal)
await m.react(rwait)
try {
let { name, packname, update, size, thumbnail, dl_url } = await Starlights.aptoide(text)
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('El archivo pesa mas de 300 MB, se canceló la Descarga.')}
let txt = `*乂  A P T O I D E  -  D O W N L O A D*\n\n`
    txt += `✩ *Nombre* : ${name}\n`
    txt += `✩ *Package* : ${packname}\n`
    txt += `✩ *Update* : ${update}\n`
    txt += `✩ *Peso* :  ${size}\n\n`
    txt += `*- ↻ El archivo se esta enviando espera un momento, soy lento. . .*`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendMessage(m.chat, {document: { url: dl_url }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: null }, {quoted: m})
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['aptoide *<búsqueda>*']
handler.tags = ['descargas']
handler.command = ['aptoide', 'apk']
handler.register = true 
handler.estrellas = 1
export default handler

/*import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) return conn.reply(m.chat, '🚩 *Ingrese el nombre de la apk para descargarlo.*', m, rcanal)
try {
await m.react(rwait)
conn.reply(m.chat, '🚩 *Descargando su aplicación...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let txt = `📲 Descargador De Aptoide 📲\n\n`
    txt += `🍟 *Nombre ∙* ${data5.name}\n`
    txt += `🪴 *Package ∙* ${data5.package}\n`
    txt += `⚖ *Peso ∙* ${data5.size}\n`
    txt += `🚩 *Actualización ∙* ${data5.lastup}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, null, rcanal) 
await m.react(done)  
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '🛑 *El archivo es demaciado pesado*', m, rcanal )}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: fkontak})
} catch {
return conn.reply(m.chat, '🛑 *Ocurrió un fallo*', m, rcanal )}}

handler.tags = ['descargas']
handler.help = ['apkmod']
handler.command = /^(apkmod|apk|dapk2|aptoide|aptoidedl)$/i
handler.register = true
handler.estrellas = 1

export default handler*/
