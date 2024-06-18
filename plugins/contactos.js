import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//m.react('⚙️')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let biografia = await conn.fetchStatus('573012482597' +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let biografiaBot = await conn.fetchStatus(`${conn.user.jid.split('@')[0]}` +'@s.whatsapp.net').catch(_ => 'Sin Biografía')
let bio = biografia.status?.toString() || 'Sin Biografía'
let biobot = biografiaBot.status?.toString() || 'Sin Biografía'
let name = await conn.getName(who)

  await sendContactArray(conn, m.chat, [
     [`${nomorown}`, `👑 Propietario`, `🍂 𝗢𝗳𝗰𝗗𝗶𝗲𝗴𝗼`, team, 'argumedod44@gmail.com', `🇨🇴 Colombia`, `https://www.youtube.com/@Yoshiko_team`, bio],
[`595983799436`, `𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿 𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮 🌟`, `🌟`, `𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮 🌟`, 'devdanixljs00@gmail.com', `🇵🇾 Paraguay`, `https://github.com/DanixlJs`, `✨️ 𝗦𝗼𝘆 𝗢𝘄𝗻𝗲𝗿 𝗗𝗲 𝗬𝗼𝘀𝗵𝗶𝗸𝗼𝗕𝗼𝘁 👑`],
[`59169082575`, `𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮 🌟`, `🌟`, `𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 😊`, 'alba070599@hotmail.com', `🇧🇴 Bolivia`, `https://github.com/Alba070503`, `Soy creador de ShizukaBot-MD y 🍁Rei Ayanami Bot MD 🍁`],
['5215610314499', '𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿𝗮 💖', '💖', '𝗖𝗼𝗹𝗮𝗯𝗼𝗿𝗮𝗱𝗼𝗿', 'thalk8980@gmail.com', '🇲🇽 Mexico', 'https://github.com/ArizzVal', 'Me gusta comer pene']
], m)
  //m.reply(`Hola @${m.sender.split(`@`)[0]} este es el contacto de mis creadores, no hagas spam!!`)
  } 

handler.help = ["contactos","contacto"]
handler.tags = ["owner"]
handler.command = /^(contactos|contacto)$/i
export default handler

async function sendContactArray(conn, jid, data, quoted, options) {
        if (!Array.isArray(data[0]) && typeof data[0] === 'string') data = [data]
                let contacts = []
        for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
            number = number.replace(/[^0-9]/g, '')
            let njid = number + '@s.whatsapp.net'
            let biz = await conn.getBusinessProfile(njid).catch(_ => null) || {}
            // N:;${name.replace(/\n/g, '\\n').split(' ').reverse().join(';')};;;
            let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:🏷 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
            contacts.push({ vcard, displayName: name })
        }
        return await conn.sendMessage(jid, {
            contacts: {
                displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
                contacts,
            }
        },
        {
            quoted,
            ...options
        })
        }