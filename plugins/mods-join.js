const { default: makeWASocket, DisconnectReason, useMultiFileAuthState } = await import('@whiskeysockets/baileys');
const handler = async (m, { conn, args, text, usedPrefix, command, isROwner }) => {
    if (args.length === 0) {
        await conn.reply(m.chat, `💌 *𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝙴𝚕 𝙴𝚗𝚕𝚊𝚌𝚎 𝙳𝚎 𝙰𝚕𝚐𝚞𝚗 𝙶𝚛𝚞𝚙𝚘*\n*𝙴𝚓𝚎𝚖𝚙𝚕𝚘:*\n*${usedPrefix + command}* ${gp1}`, m);
        return;
    }
    const link = args[0];
    const regex = /https:\/\/chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/;
    const match = link.match(regex);
    if (!match) {
        await conn.reply(m.chat, `💭 El Link proporcionado no es un enlace válido de WhatsApp.`, m);
        return;
    }
    const inviteCode = match[1];
    try {
        const groupMetadata = await conn.groupGetInviteInfo(inviteCode);
        const groupName = groupMetadata.subject;
        const participantCount = groupMetadata.participants.length;
        if (isROwner) {
            await conn.groupAcceptInvite(inviteCode);
            await conn.reply(m.chat, `╰⊱🌺⊱ 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 ⊱🌺⊱╮\n\n${packname}\n*𝚈𝚊 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘 💥*`, m);
        } else {
            const GroupId = '120363293509057755@g.us';
            const displayName = await conn.getName(m.sender);
let msg = `💌 *INVITACIÓN A GRUPO*\n💥 *Usuario:* @${m.sender.split('@')[0]}\n✨️ *Grupo:* ${groupName}\n☁️ *Participantes:* ${participantCount}\n💖 *Link:*\n${link}`
let mentionedJid = conn.parseMention(msg)
            await conn.reply(GroupId, msg, m, fake, { mentions: mentionedJid });
            await conn.reply(m.chat, `💫 Tu solicitud ha sido enviada a los Moderadores del Bot.`, m, fake, );
        }
    } catch (error) {
        await m.reply(`💥 Ocurrió un error inesperado.`);
        console.error(error);
    }
};
handler.help = ['join <link>'];
handler.command = ['join'];
handler.tags = ['grupo'];
handler.register = true;
export default handler;