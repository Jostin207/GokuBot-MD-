import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

// Define la variable canales con la URL correcta
const canales = 'https://whatsapp.com/channel/0029VaJL0xn0LKZL7FtiRs1e'; // Reemplaza con la URL correcta

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)

  if (user.registered === true) throw `*『✦』Ya estás registrado, para volver a registrarte, usa el comando: #unreg*`
  if (!Reg.test(text)) throw `*『✦』El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n#reg *Nombre.edad*\n\n\`\`\`Ejemplo:\`\`\`\n#reg *${name2}.18*`

  let [_, name, splitter, age] = text.match(Reg)

  if (!name) throw '*『✦』No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
  if (!age) throw '*『✦』No puedes registrarte sin la edad, la edad es opcional. Inténtelo de nuevo.*'
  if (name.length >= 30) throw '*『✦』El nombre no debe tener más de 30 caracteres.*' 

  age = parseInt(age)

  if (age > 999) throw '*『😏』<¡Viejo/a Sabroso/a!_*'
  if (age < 5) throw '*_¿Donde Están Tus Papás?_*😂'

  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].estrellas += 10
  global.db.data.users[m.sender].exp += 245
  global.db.data.users[m.sender].joincount += 5

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)        
  m.react('✅️') 

  let regbot = `╭══• ೋ•✧๑♡๑✧•ೋ •══╮
*¡𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙾!*
╰══• ೋ•✧๑♡๑✧•ೋ •══╯
║_-~-__-~-__-~-__-~-__-~-__-~-__-~-__-~-__-~-__-~-__
║
║ ֪ ׂ⛓️ ׁ ֪ 𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
║ ֪ ׁ🌫️  𝇌 𝐄𝐝𝐚𝐝: ${age} *Años*
║
║ *𝙶𝚛𝚊𝚌𝚒𝚜 𝚙𝚘𝚛 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚛𝚝𝚎* 
║📝 *𝚄𝚝𝚒𝚕𝚒𝚣𝚊* *.menu* *𝚙𝚊𝚛𝚊* *𝚟𝚎𝚛* *𝚎𝚕* *𝚖𝚎𝚗ú* *𝚍𝚎* *𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜.*
║
║
║ ✨ 𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
║• 15 Estrellas 🌟
║• 5 GokuCoins 🪙
║• 245 Experiencia 💸
║• 12 Tokens 💰
╚══✦「꧙꧙꧙꧙꧙꧙꧙꧙꧙꧙꧙꧙」`

  conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
        body: wm, 
        thumbnailUrl: 'https://qu.ax/QRWf.jpg', 
        sourceUrl: canales,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      }
    }
  }, { quoted: fkontak })
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler