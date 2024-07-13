import { search, download } from 'aptoide-scraper'


let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, '🚩 *Ingrese el nombre de la apk para descargarlo.*', m, rcanal)
try {
await m.react(rwait)
let { name, packname, update, size, thumbnail, dl_url } = await Scraper.aptoide(text)
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('El archivo pesa mas de 300 MB, se canceló la Descarga.')}
let txt = `╭─⬣「 *Aptoide Descargas* 」⬣\n`
    txt += `│  ≡◦ *🍭 Nombre ∙* ${name}\n`
    txt += `│  ≡◦ *🪴 Packname ∙* ${packname}\n`
    txt += `│  ≡◦ *⚖ Peso ∙* ${size}\n`
    txt += `│  ≡◦ *🕜 Peso ∙* ${update}\n`
    txt += `╰─⬣`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m, rcanal)
await conn.sendMessage(m.chat, {document: { url: dl_url }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: null }, {quoted: fkontak})
await m.react(done)
} catch {
}}
handler.help = ['aptoide <búsqueda>']
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
let response = `📲 Descargador De Aptoide 📲\n\n🍟 *Nombre:* ${data5.name}\n🚩 *Package:* ${data5.package}\n🎌 *Actualización:* ${data5.lastup}\n📦 *Tamaño:* ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', response, m, null, rcanal) 
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
