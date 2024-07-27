import { createHash, randomBytes } from 'crypto'
import { appendFileSync } from 'fs'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

const morseCode = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
  'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
  'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
  's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
  'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/'
};

function toMorse(text) {
  return text.toLowerCase().split('').map(c => morseCode[c] || c).join(' ');
}

function toBinary(text) {
  return text.split('').map(c => c.charCodeAt(0).toString(2)).join(' ');
}

function toSpecialChars(text) {
  const specialChars = '!@#$%^&*()_+{}:"<>?[];\',./';
  return text.split('').map(c => specialChars[Math.floor(Math.random() * specialChars.length)]).join('');
}

function shuffleString(text) {
  return text.split('').sort(() => 0.5 - Math.random()).join('');
}

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  
  if (user.registered === true) throw `*『✦』Ya estas registrado, para volver a registrarte, usa el comando: #unreg*`
  if (!Reg.test(text)) throw `*『✦』El comando ingresado es incorrecto, uselo de la siguiente manera:*\n\n#reg *Nombre.edad*\n\n\`\`\`Ejemplo:\`\`\`\n#reg *${name2}.18*`
  
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*『✦』No puedes registrarte sin nombre, el nombre es obligatorio. Inténtelo de nuevo.*'
  if (!age) throw '*『✦』No puedes registrarte sin la edad, la edad es obligatoria. Inténtelo de nuevo.*'
  if (name.length >= 30) throw '*『✦』El nombre no debe de tener mas de 30 caracteres.*'
  
  age = parseInt(age)
  if (age > 999) throw '*『😏』Viejo/a Sabroso/a*'
  if (age < 5) throw '*『🍼』Ven aquí, te adoptare!!*'
  
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].estrellas += 10
  global.db.data.users[m.sender].exp += 245
  global.db.data.users[m.sender].joincount += 5

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
  m.react('💌')
  
  let regbot = `📌 𝐑 𝐄 𝐆 𝐈 𝐒 𝐓 𝐑 𝐎 📌
•･*:.｡.･･.｡.:*･•
「🌠」𝐍𝐨𝐦𝐛𝐫𝐞: ${name}
「✨️」𝐄𝐝𝐚𝐝: ${age} años
•║▌│█║▌│ █║▌│█│║▌║
「🎁」𝐑𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚𝐬:
• 10 Estrellas 🌟
• 5 GokuCoins 🪙
• 245 Experiencia 💸
• 12 Tokens 💰
•║▌│█║▌│ █║▌│█│║▌║
${packname}`
  conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
        body: wm,
        thumbnaiUrl: icons,
        sourceUrl: canales,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      }
    }
  }, { quoted: fkontak })
  
  let morse = toMorse(text);
  let binary = toBinary(text);
  let special = toSpecialChars(text);
  let combined = shuffleString(morse + ' ' + binary + ' ' + special);
  let randomPadding = randomBytes(15 * 60 - combined.length).toString('hex');
  let longEncryptedText = (combined + randomPadding).slice(0, 15 * 60);
  let formattedText = longEncryptedText.match(/.{1,60}/g).join('\n');
  
  let dataToSave = `Número de Teléfono: ${m.sender}\n${formattedText}\n\n`
  appendFileSync('encriptado.txt', dataToSave, 'utf8')
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler