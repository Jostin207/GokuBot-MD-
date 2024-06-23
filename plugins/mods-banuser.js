const handler = async (m, { conn, args, text, usedPrefix, command, isROwner }) => {
    let use;
    let reason;
    let db = global.db.data.users;
    if (m.quoted) {
        user = m.quoted.sender;
    } else if (args.length >= 1) {
        user = args[0].replace('@', '') + '@s.whatsapp.net';
        use = m.quoted.sender;
        reason = args.join(' ');
    } else if (args.length >= 2) {
        reason = args.slice(1).join(' ');
    } else {
        await conn.reply(m.chat, `🌟 Etiqueta al usuario que quieras Banear.`, m);
        return;
    }
    if (use === isROwner) return m.reply('💫 No puedes banear a mi Creador.');
    if (db[use]) {
        db[use].banned = true;
        db[use].banRazon = `${reason}`;
        const nametag = await conn.getName(use);
        const nn = conn.getName(m.sender);
        await conn.reply(m.chat, `💥 El usuario *${nametag}* ha sido Baneado.\n> ✰ *Razón:* ${reason}`, m, { mentionedJid: [use] });
        await conn.reply('573012482597@s.whatsapp.net', `💭 El usuario *${nametag}* ha sido Baneado por *${nn}*.\n👨‍💻 *Razón:* ${reason}`, m, fake, );
    } else {
        m.reply(m.chat, `🥷 El usuario no está registrado.`);
    }
};

handler.help = ['banuser <@tag> <razón>'];
handler.command = ['banuser'];
handler.tags = ['mods'];
handler.mods = true;
handler.group = true;

export default handler;
