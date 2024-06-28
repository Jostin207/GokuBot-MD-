let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, `🤍 Responde a un *Video.*`, m, rcanal)
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) return conn.reply(m.chat, `🤍 Responde a un *Video.*`, m, rcanal)
await m.react(rwait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: listo }, { quoted: fkontak })
await m.react(done)
}
handler.help = ['togifaud']
handler.tags = ['tools']
handler.command = ['togifaud']
export default handler

/* const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*☁️ Responda A Un Video Que Desee Convertir En Gif Con Audio*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*☄️ El Tipo De Archivo ${mime} No Es Correcto, Responda A Un Video Que Desee Convertir En Gif Con Audio*`;
conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*☁️ La Musica Se Reproduce Cuando Abras El Archivo*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler; */
