import fetch from 'node-fetch';
const handler = async (m, { conn, args, usedPrefix }) => {
if (!args[0]) {
if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.reply(m.chat, `💌 El grupo no admite contenido *Nsfw.*\n\n> Para activarlo un *Administrador* debe usar el comando ${usedPrefix}*`, m, rcanal)
await conn.reply(m.chat, '🤍 Ingresa un tag para realizar la búsqueda.', m, rcanal);
return;
}
const tag = args[0];
const url = `https://rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=${tag}`;
try {
const response = await fetch(url);
const data = await response.json();
if (!data || data.length === 0) {
await conn.reply(m.chat, `💌 No hubo resultados para *${tag}*`, m, rcanal);
return;
}
const randomIndex = Math.floor(Math.random() * data.length);
const randomImage = data[randomIndex];
const imageUrl = randomImage.file_url;
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*Resultados De:* ${text}`, m, null, rcanal)
} catch (error) {
console.error(error);
await m.reply('💥 Ocurrió un error inesperado.');
}};
handler.help = ['r34 <tag>'];
handler.command = ['r34', 'rule34'];
handler.tags = ['nsfw'];
handler.register = true;
//handler.limit = 2;
export default handler;