var handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]

if (/^bot$/i.test(m.text) && !chat.isBanned) {
    
m.reply('☁️ *Estoy aquí para ayudarte*', m)}

if (/^akira$/i.test(m.text) && !chat.isBanned) {
    
m.reply(' *Es El Mejor Hostin* 🙈🌹', m, rcanal)}

return !0

}
export default handler