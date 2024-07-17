import db from '../lib/database.js'

import MessageType from '@whiskeysockets/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '🚩 Menciona al usuario con *@user.*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '🚩 Ingrese la cantidad de *⭐ Estrellas* que quiere transferir.'
if (isNaN(txt)) throw 'Sólo números.'
let poin = parseInt(txt)
let estrellas = poin
let imt = Math.ceil(poin * impuesto)
estrellas += imt
if (estrellas < 1) throw '🚩 Mínimo es *1 ⭐ Estrella*.'
let users = global.db.data.users
if (limit > users[m.sender].estrellas) throw 'No tienes suficientes *⭐ Estrellas* para dar.'
users[m.sender].estrellas -= estrellas
users[who].estrellas += poin
await m.reply(`*${-poin}* ⭐ Estrellas 
Impuesto 2% : *${-imt}* ⭐ Estrellas
Total gastado: *${-estrellas}* ⭐ Estrellas`)
conn.fakeReply(m.chat, `*+${poin}* *⭐ Estrellas.*`, who, m.text)
}
handler.help = ['darstars *@user <cantidad>*']
handler.tags = ['rpg']
handler.command = ['darcoins', 'darstars', 'darestrellas', 'addestrellas', 'addstarts']
handler.register = true 

export default handler