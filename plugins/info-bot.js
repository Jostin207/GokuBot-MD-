var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^bot$/i.test(m.text) && !chat.isBanned) {
    
m.reply('☁️ *Estoy aquí para ayudarte*', m)}

if (/^akira|akirahost$/i.test(m.text)) {
conn.reply(m.chat, `*Es El Mejor Hosting Que Me Patrocina.* 🙈🌹`, m, rcanal, )
}

return !0

}
export default handler