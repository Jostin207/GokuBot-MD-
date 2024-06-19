pconst handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let user;
    let reason;
    let db = global.db.data.users
    if (m.quoted) {
        user = m.quoted.sender;
        reason = args.join(' ');
    } else if (args.length >= 2) {
        user = args[0].replace('@', '') + '@s.whatsapp.net';
        reason = args.slice(1).join(' ');
    } else {
        await conn.reply(m.chat, `💌 Etiqueta o responde al mensaje del usuario que quieras Advertir, Ejemplo:\n> → *${usedPrefix + command} <@tag> <razón>*`, m);
        return;
    }
    if (db[user]) {
      w  if (!db[user].warn) {
            db[user].warn = 0;
        }
        if (!db[user].warnRazon) {
            db[user].warnRazon = '';
        }
        db[user].warn += 1;
        db[user].warnRazon = `${reason}`;
        const nametag = await conn.getName(user);
        await conn.reply(m.chat, `✨️ El usuario *${nametag}* ha sido advertido.\n> 💭 *Advertencias:* ${db[user].warn}`, m, fake, );
let nn = conn.getName(m.sender);       conn.reply('573012482597@s.whatsapp.net', `💌 El usuario *${nametag}* recibió una advertencia de *${nn}*.`, m, fake, );
    } else {
        await conn.reply(m.chat, `🥷 El usuario no está registrado.`, m);
    }
};
handler.help = ['advertencia <@tag> <razón>'];
handler.command = ['advertencia'];
handler.tags = ['grupo'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;