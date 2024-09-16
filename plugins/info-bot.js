import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🚩 ¡Hola! Soy Goku, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
}
if (/^akira|akirahost$/i.test(m.text)) {
conn.reply(m.chat, `*_Es El Mejor Hosting_* ❤️‍🩹`, m, rcanal, )
}
if (/^Goku|gokusito|gokubot-md$/i.test(m.text)) {
conn.reply(m.chat, `*_Gracias Por Conocerme Bro_* 🫂`, m, rcanal, )
}
return !0;
};
export default handler;