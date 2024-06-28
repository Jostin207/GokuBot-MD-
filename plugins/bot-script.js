import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://api.github.com/repos/OfcDiego/EmiliaRezero-MD')
let json = await res.json()
try {
let txt = `*乂  S C R I P T  -  M A I N*\n\n`
    txt += `        ✩   *Nombre* : ${json.name}\n`
    txt += `        ✩   *Visitas* : ${json.watchers_count}\n`
    txt += `        ✩   *Peso* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `        ✩   *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `        ✩   *Url* : ${json.html_url}\n`
    txt += `        ✩   *Forks* : ${json.forks_count}\n`
    txt += `        ✩   *Stars* : ${json.stargazers_count}\n\n`
    txt += `> 🚩 *${packname}*`
let img = await (await fetch(imagen1)).buffer()

await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": packname, "body": wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": redes, "sourceUrl": redes}}}, {quoted: fkontak});
//await conn.reply(m.chat, botname, textbot, txt, img, img, redes, m)
} catch {
await m.react('✖️')
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc']
handler.register = true 
export default handler