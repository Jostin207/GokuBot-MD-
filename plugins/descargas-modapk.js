import { search, download } from 'aptoide-scraper'

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
let txt = `╭─⬣「 *Aptoide Descargas* 」⬣\n`
    txt += `│ 🍟 *Nombre ∙* ${data5.name}\n`
    txt += `│ 🪴 *Package ∙* ${data5.package}\n`
    txt += `│ ⚖ *Peso ∙* ${data5.size}\n`
    txt += `│ 🚩 *Actualización ∙* ${data5.lastup}\n`
    txt += `╰─⬣`
// let response = `📲 Descargador De Aptoide 📲\n\n🍟 *Nombre:* ${data5.name}\n🚩 *Package:* ${data5.package}\n🎌 *Actualización:* ${data5.lastup}\n📦 *Tamaño:* ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, rcanal) 
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

export default handler
