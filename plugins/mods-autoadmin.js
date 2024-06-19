const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('💌 *¡YA ERES ADM JEFE!* 💌');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
    m.react('✅')
   return m.reply('👑 ¡YA TE DI ADM MI JEFE!*!');
    let nn = conn.getName(m.sender);
    conn.reply('573012482597@s.whatsapp.net', `💥 *${nn}* se dio Auto Admin en:\n> ${groupMetadata.subject}.`, m, fake, );
  } catch {
    m.reply('🌟 Ocurrio un error inesperado.');
  }
};
handler.tags = ['mods'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
