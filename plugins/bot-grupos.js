let pp = './Menu.jpg'
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

💖 ${colab3}
${gp5}

💖 ${colab4}
${gp6}

 *◜🌸 CANAL OFICIAL 🌸◞*

✨️ ${namechannel}
${channel}`
m.react('🤍') 

//     await conn.sendFile(m.chat, pp, 'yoshiko.jpg', str, rcanal)}

return conn.reply(m.chat, colab, pp, m, rcanal, )

handler.command = /^grupos|linkyl|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler