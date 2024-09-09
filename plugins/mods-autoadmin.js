const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('🚩 *¡YA ERES ADMIN MI JEFE!*');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply('✨ *¡YA TIENES ADMIN MI OWNER!*');
    let nn = conn.getName(m.sender);
     conn.reply('593939005387@s.whatsapp.net', `🚩 *${nn}* se dio Auto Admin en:\n> ${groupMetadata.subject}.`, m, rcanal, );
  } catch {
    m.reply('❌ Ocurrio un error.');
  }
};
handler.tags = ['mods'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin, 'damepower', 'tenerpoder'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
