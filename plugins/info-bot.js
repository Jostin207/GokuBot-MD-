import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🤍 ¡Hola! Soy Emilia, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, fake, )
}
if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so* 🧀`, m, fake, )
}
if (/^sexo$/i.test(m.text)) {
conn.reply(m.chat, `*pervertido* 🫣`, m, fake, )
}
if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rrocito* 🍚`, m, fake, )
}
if (/^pene$/i.test(m.text)) {
conn.reply(m.chat, `*comes* 😹`, m, fake, )
}
return !0;
};
export default handler;