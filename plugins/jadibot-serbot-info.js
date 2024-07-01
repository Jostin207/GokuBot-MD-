import ws from 'ws'
async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()
  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })
 let users = [...uniqueUsers.values()]
 let message = Array.from(uniqueUsers.values()).map((user, index) => `╭─⬣「 *Luffy Bot - MD* 🤍 」⬣\n│⁖ฺ۟̇࣪·֗٬̤⃟🌸 *${index + 1}.-* @${user.jid.replace(/[^0-9]/g, '')}\n│❀ *Link:* https://wa.me/${user.jid.replace(/[^0-9]/g, '')}\n│❀ *Nombre:* ${user.name || '𝚂𝚄𝙱-𝙱𝙾𝚃'}\n╰─⬣\n`).join('\n')
  let replyMessage = message.length === 0 ? '' : message
  global.totalUsers = users.length
  let responseMessage = `╭━〔 𝗦𝗨𝗕-𝗕𝗢𝗧𝗦 𝗝𝗔𝗗𝗜𝗕𝗢𝗧 🤍 〕⬣\n┃ *𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝚂𝚄𝙱𝙱𝙾𝚃𝚂* : ${totalUsers || '0'}\n╰━━━━━━━━━━━━⬣\n\n${replyMessage.trim()}`.trim()
  await stars.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/5d07a1f6d08a147c6f0f9.png" }, caption: responseMessage, mentions: stars.parseMention(responseMessage), quoted: m})

  //await stars.reply(m.chat, responseMessage, m, { mentions: await stars.parseMention(responseMessage)} )
}

handler.command = ['bots']
handler.help = ['bots']
handler.tags = ['jadibot']
handler.registrado = true
export default handler