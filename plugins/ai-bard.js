import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🍟 *Ingresé una petición*\n\nEjemplo, ${usedPrefix + command} Conoces LuffyBot-MD?`, m, rcanal)
try {
await m.react(rwait)
conn.reply(m.chat, '🚩 Buscando Información...', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
await m.react(done)
} catch (error) {
await m.react(error)
console.error(error)
return conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, rcanal)
}}

handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']
handler.premium = false

export default handler