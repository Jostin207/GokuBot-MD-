const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*☁️ Responda A Un Video Que Desee Convertir En Gif Con Audio*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*☄️ El Tipo De Archivo ${mime} No Es Correcto, Responda A Un Video Que Desee Convertir En Gif Con Audio*`;
  conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: redes }}})
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*☁️ La Musica Se Reproduce Cuando Abras El Archivo*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
