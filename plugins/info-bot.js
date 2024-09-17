var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^bot$/i.test(m.text) && !chat.isBanned) {
    
m.reply('☁️ *Estoy aquí para ayudarte*', m)}

return !0

}
export default handler