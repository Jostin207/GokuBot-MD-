let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return m.reply('╰⊱🌩⊱ 𝗘𝗥𝗥𝗢𝗥 ⊱🌩⊱╮\n\n🔵 *¡ESTE CHAT NO ESTÁ REGISTRADO!*')
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return m.reply('╰⊱🌩⊱ 𝗘𝗥𝗥𝗢𝗥 ⊱🌩⊱╮\n\n🍬 *¡EL BOT NO ESTÁ BANEADO EN ESTE CHAT!*')
chat.isBanned = false
await conn.reply(m.chat, '╰⊱🌺⊱ 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 ⊱🌺⊱╮\n\n🍒 *¡EL BOT YA FUÉ DESBANEADO EN ESTE CHAT!*', m)
}
handler.help = ['unbanchat'];
handler.tags = ['mods'];
handler.command = /$unbanchatbot|desbanearchatbot|activarchatbot$/i
handler.mods = true 
//handler.group = true

export default handler