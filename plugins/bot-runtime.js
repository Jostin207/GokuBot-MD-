let handler = async (m, { usedPrefix, command }) => {
let uptime = await process.uptime()
let runtime = `『 *Tiempo Activa* 』

✰ 𝗧𝗶𝗲𝗺𝗽𝗼 𝗔𝗰𝘁𝗶𝘃𝗮: ${rTime(uptime)}`
conn.reply(m.chat, runtime, m, { contextInfo: { externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: packname, body: dev, previewType: 0, thumbnail: icons, sourceUrl: channel}}})
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^(uptime|runtime)$/i

export default handler


const dd = new Date(new Date + 3600000);
const time = dd.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    });

function rTime(seconds) {
  seconds = Number(seconds);
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}