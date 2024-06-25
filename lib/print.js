import PhoneNumber from 'awesome-phonenumber';
import chalk from 'chalk';
import { watchFile } from 'fs';
import moment from 'moment-timezone';

const urlRegex = (await import('url-regex-safe')).default({ strict: false });

export default async function (m, conn = { user: {} }) {
    let _name = await conn.getName(m.sender);
    let sender = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') + (_name ? ' ~' + _name : '');
    let chat = await conn.getName(m.chat);

    let oraAttuale = moment.tz('America/Asuncion').format('HH:mm - dddd D [de] MMMM');

    let chatName = chat ? (m.isGroup ? 'Grupo: ' + chat : 'Chat Privado: ' + chat) : '';
    console.log(`${chalk.hex('#FF0000').bold('╭─────────────────⪩')}
${chalk.green('│❀')} ${chalk.cyan('Bot ⪼ %s')}
${chalk.green('│✰')} ${chalk.cyan('Hora ⪼ ${oraAttuale}')}
${chalk.green('│')} 
${chalk.green('│◈')} ${chalk.cyan('%s')}
│◈ ${chalk.cyan(`${chatName}`)}
${chalk.hex('#FF0000').bold('╰────⪩')}
${chalk.blue('➢ 𝐌𝐞𝐧𝐬𝐚𝐣𝐞:')}\n`.trim(),

conn.user?.jid ? PhoneNumber('+' + conn.user.jid.replace('@s.whatsapp.net', '')).getNumber('international') + ' ~' + conn.user.name : 'N/A',
sender
);

    if (typeof m.text === 'string' && m.text) {
        let log = m.text.replace(/\u200e+/g, '');
        let mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~])(.+?)\1|```((?:.||[\n\r])+?)```)(?=\S?(?:[\s\n]|$))/g;
        let mdFormat = (depth = 4) => (_, type, text, monospace) => {
            let types = {
                _: 'italic',
                '*': 'bold',
                '~': 'strikethrough'
            };
            text = text || monospace;
            let formatted = !types[type] || depth < 1 ? text : chalk[types[type]](text.replace(mdRegex, mdFormat(depth - 1)));
            return formatted;
        };
        if (log.length < 4096) {
            log = log.replace(urlRegex, (url, i, text) => {
                let end = url.length + i;
                return i === 0 || end === text.length || (/^\s$/.test(text[end]) && /^\s$/.test(text[i - 1])) ? chalk.blueBright(url) : url;
            });
        }
        log = log.replace(mdRegex, mdFormat(4));
        if (m.mentionedJid) for (let user of m.mentionedJid) log = log.replace('@' + user.split`@`[0], chalk.blueBright('@' + await conn.getName(user)));
        console.log(m.error != null ? chalk.red(log) : m.isCommand ? chalk.yellow(log) : log);
    }

    if (m.messageStubParameters) {
        console.log(m.messageStubParameters.map(jid => {
            jid = conn.decodeJid(jid);
            let name = conn.getName(jid);
            const phoneNumber = PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
            return name ? chalk.gray(`${phoneNumber} (${name})`) : '';
        }).filter(Boolean).join(', '));
    }

    if (/document/i.test(m.mtype)) console.log(`🗂️ ${m.msg.fileName || m.msg.displayName || 'Document'}`);
    else if (/ContactsArray/i.test(m.mtype)) console.log(`👨‍👩‍👧‍👦 ${' ' || ''}`);
    else if (/contact/i.test(m.mtype)) console.log(`👨 ${m.msg.displayName || ''}`);
    else if (/audio/i.test(m.mtype)) {
        const duration = m.msg.seconds;
        console.log(`${m.msg.ptt ? '🎤ㅤ(PTT ' : '🎵ㅤ('}AUDIO) ${Math.floor(duration / 60).toString().padStart(2, 0)}:${(duration % 60).toString().padStart(2, 0)}`);
    }
    console.log();
}

let file = global.__filename(import.meta.url);
watchFile(file, () => {
    console.log(chalk.green('❀ Archivo "lib/print.js" actualizado.'));
});