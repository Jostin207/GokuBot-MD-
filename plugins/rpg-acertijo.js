import fs from 'fs';
const timeout = 60000; 
const poin = 1000;
const handler = async (m, { conn, usedPrefix }) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, '🤍 Todavía hay acertijos sin responder en este chat.', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `☁️ *ACERTIJOS*
🤍 *${json.question}*

💥 *Tiempo:* ${(timeout / 1000).toFixed(2)} Segundos
💌 *Premio:* *+${poin}* ${global.botcoins}
`.trim();
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) {
        await conn.reply(m.chat, `✨️ Se acabó el tiempo!\n✰ *Respuesta:* ${json.response}`, conn.tekateki[id][0]);
        delete conn.tekateki[id];
      }
    }, timeout)
  ];
};
handler.help = ['acertijo'];
handler.tags = ['rpg'];
handler.command = ['acertijo'];
handler.register = true;
export default handler;