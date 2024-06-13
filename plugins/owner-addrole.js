const handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (args.length >= 2) {
const user = args[0].replace('@', '') + '@s.whatsapp.net';
const role = args.slice(1).join(' ');
if (global.db.data.users[user]) {
global.db.data.users[user].userol = role;
await conn.reply(m.chat, `🥷 El usuario @${user.replace('@s.whatsapp.net', '')} ha recibido el rol de ${role}.`, m, { mentions: [user]});
} else {
await conn.reply(m.chat, `✨️ El usuario no está registrado.`, m);
}
} else {
await conn.reply(m.chat, `💭 Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> → *${usedPrefix + command} <@tag> <rol>*`, m);
}};

handler.help = ['addrol <@tag> <rol>'];
handler.command = ['addrol', 'addrole', 'darrole'];
handler.tags = ['owner'];
handler.rowner = true;
handler.group = true;

export default handler;