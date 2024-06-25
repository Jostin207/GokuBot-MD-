let pp = `${global.vid}`
let handler = async (m, { conn, command }) => {
let colab = `*◜🌸 GRUPOS OFICIALES 🌸◞*

👑 ${wm} 1
${gp1}

👑 ${wm} 2
${gp2}

 *◜🌸 COLABORACIÓN 🌸◞*

💖 ${colab1}
${gp3}

💖 ${colab2}
${gp4}

 *◜🌸 CANAL OFICIAL 🌸◞*

✨️ ${namechannel}
${channel}`
m.react('🤍') 

//await conn.sendFile(m.chat, pp, 'yoshiko.jpg', str, rcanal)}

await conn.sendFile(m.chat, pp, 'thumbnail.jpg', colab.trim(), m, null, rcanal)}

handler.command = /^grupos|linkyl|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler