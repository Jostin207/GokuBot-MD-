let handler = async (m, { conn, command }) => {
let colab = `*◜💙 GRUPOS OFICIALES 💙◞*

👑 ${wm} 1
${gp1}

👑 ${wm} 2
${gp2}

 *◜🤍 COLABORACIÓN 🤍◞*

💖 ${colab1}
${gp3}

💖 ${colab2}
${gp4}

 *◜🌸 CANAL OFICIAL 🌸◞*

✨️ ${namechannel}
${channel}`
m.react('🤍') 

  let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  const response = await fetch(vid)
  const gif = await response.buffer()

conn.sendMessage(m.chat, { video: vid, gifPlayback: true, caption: colab.trim(), mentions: [m.sender] }, { quoted: estilo })}

handler.command = /^grupos|linkre|rezerogp|gpemilia|gruposofc|gruposoficiales$/i
handler.register = true

export default handler