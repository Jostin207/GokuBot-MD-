import fs from 'fs';
import {sticker} from '../lib/sticker.js';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `✨ ¡Hola! Soy ɢᴏᴋᴜ-ʙᴏᴛ, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}

if (/^akira|akirahost$/i.test(m.text)) {
conn.reply(m.chat, `*Es El Mejor Hosting Que Me Patrocina.* 🌹`, m, rcanal, )
}

return !0

}
export default handler