import ws from 'ws'
async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()
  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })
 let users = [...uniqueUsers.values()]
 let message = Array.from(uniqueUsers.values()).map((user, index) => `╭─⬣「 *Emilia Re:zero - MD* 🤍 」⬣\n│⁖ฺ۟̇࣪·֗٬̤⃟🌸 *${index + 1}.-* @${user.jid.replace(/[^0-9]/g, '')}\n│❀ *Link:* https://wa.me/${user.jid.replace(/[^0-9]/g, '')}\n│❀ *Nombre:* ${user.name || '𝚂𝚄𝙱-𝙱𝙾𝚃'}\n╰─⬣\n`).join('\n')
  let replyMessage = message.length === 0 ? '' : message
  global.totalUsers = users.length
  let responseMessage = `╭───────────────────\n│⊷〘 *${global.wm}* 〙⊷\n│ 💫 *Total De Sub-Bots:* ${totalUsers || '0'}\n╰───────────────────\n\n${replyMessage.trim()}`.trim()
  await stars.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/b867188ad3e6ea1f593ad.png" }, caption: responseMessage, mentions: stars.parseMention(responseMessage), quoted: m})

  //await stars.reply(m.chat, responseMessage, m, { mentions: await stars.parseMention(responseMessage)} )
}

handler.command = ['bots']
handler.help = ['bots']
handler.tags = ['jadibot']
handler.registrado = true
export default handler