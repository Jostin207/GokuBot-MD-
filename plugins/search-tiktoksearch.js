import axios from 'axios';
let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '💥 Ingresa un texto para realizar la búsqueda.', m);
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
try {
const { data } = await axios.get(`https://apis-starlights-team-cbb6f3a3.koyeb.app/starlight/tiktoksearch?text=${text}`);
const results = data.data;
if (!results.length) return conn.reply(m.chat, '👑 No se encontraron resultados.', m);
const randomResult = getRandomElement(results);
const videoUrl = randomResult.nowm;
await conn.sendFile(m.chat, videoUrl, 'tts.mp4', `✰ *Resultados de:* ${text}`, m);
} catch (error) {
    console.log(error);
}};

handler.command = ['tiktoksearch'];
handler.help = ['tiktoksearch <texto>'];
handler.register = true;
handler.tags = ['search'];
handler.limit = 1;

export default handler;