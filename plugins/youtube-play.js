import fetch from "node-fetch"
import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    if (!text) {
        return conn.reply(m.chat, '*¿Qué quieres que busque 𝖾𝗅 𝖻𝗈𝗍 GokuBot-MD?*', m);
    }

    await m.react('⏳');
    let res = await yts(text);
    let play = res.videos[0];

    if (!play) {
        throw `Error: Vídeo no encontrado`;
    }

    let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

    let txt = '```𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚜```\n';
    txt += '╭━─━─━─━─≪✠≫─━─━─━─━╮\n';
    txt += `> *Titulo* : _${title}_\n`;
    txt += `> *Creado* : _${ago}_\n`;
    txt += `> *Duración* : _${timestamp}_\n`;
    txt += `> *Visitas* : _${views.toLocaleString()}_\n`;
    txt += `> *𝙻𝚒𝚗𝚔* : _https://www.youtube.com/watch?v=${videoId}_\n`;
    txt += '┗─══──━══─| ✠ |─══━─═──┛ \n';
    txt += '*🧸 GOKUBOT-MD ✨️*';

    await conn.sendButton(m.chat, txt, '. ', thumbnail, [
        ['audioMP3', `${usedPrefix}ytmp3 ${url}`],
        ['audioMP3DOC', `${usedPrefix}ytmp3doc ${url}`],
        ['videoMP4', `${usedPrefix}ytmp4 ${url}`], 
        ['videoMP4DOC', `${usedPrefix}ytmp4doc ${url}`]
        ], null, [['Canal', 'https://whatsapp.com/channel/0029VaJL0xn0LKZL7FtiRs1e']], m);

    await m.react('✔️');
};

handler.help = ['play', 'play2', 'ytmp3'];
handler.tags = ['dl'];
handler.command = ['play',];

export default handler;