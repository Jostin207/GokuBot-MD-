let handler = async (m, { conn, command }) => {
let colab = `*◜💙 ${global.gruposofc} 💙◞*

🚩 ${global.packname} 
${global.gp1}

🚩 ${global.packname} 2
${global.gp2}

 *◜🤍 ${global.colaboraciones} 🤍◞*

🍟 ${global.colab1}
${global.gp3}

🍟 ${global.colab2}
${global.gp4}

🍟 ${global.namecomu}
${global.comunidad}

🍟 ${global.namecomu2}
${global.comunidad2}

 *◜🌸 ${global.canalofc} 🌸◞*

🍭 ${global.namechannel}
${global.channel}

🍭 ${global.namechannel2}
${global.channel2}`

m.react(emojis) 

  let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  const response = await fetch(vid)
  const gif = await response.buffer()

//conn.sendMessage(m.chat, { video: gif, gifPlayback: true, caption: colab.trim(), mentions: [m.sender] }, { quoted: estilo })}

await conn.sendMessage(m.chat, { video: gif, gifPlayback: true, caption: colab.trim(), mentions: [m.sender], contextInfo: {
mentionedJid: await conn.parseMention(colab),
isForwarded: true,
forwardingScore: 1, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363263466636910@newsletter',
newsletterName: packname,
serverMessageId: -1
}}}, { quoted: estilo })}

handler.tags = ['main']
handler.help = ['grupos']
handler.command = /^grupos|gruposluffy|linkre|luffygp|gpluffy|gruposofc|gruposoficiales$/i
handler.register = true

export default handler
