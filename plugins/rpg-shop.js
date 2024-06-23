const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌◈ ━━━━━━━ ⸙ ━━━━━━━ ◈
╏✤➻ *🍁 𝖢𝗈𝗆𝗉𝗋𝖺 𝖭𝗈𝗆𝗂𝗇𝖺𝗅* : + ${count}🪙
╏✤➻ *🍁 𝖦𝖺𝗌𝗍𝖺𝖽𝗈* : -${xpperlimit * count} XP
└◈ ━━━━━━━ ⸙ ━━━━━━━ ◈`, m);
  } else conn.reply(m.chat, `😔 Lo siento, no tienes suficiente *XP* para comprar *${count}* Centavos🪙`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;