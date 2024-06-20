import axios from 'axios';
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import('@whiskeysockets/baileys')).default;

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '💥 Ingresa un texto para realizar la búsqueda.', m);

const createVideo = async (url) => {
    const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer });
    return videoMessage;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

try {
    const { data } = await axios.get(`https://apis-starlights-team-cbb6f3a3.koyeb.app/starlight/tiktoksearch?text=${text}`);
    const results = data.data;

    if (!results.length) return conn.reply(m.chat, '💌 No se encontraron resultados.', m);

    shuffleArray(results);

    const selectedResults = results.slice(0, 7);

    const push = await Promise.all(selectedResults.map(async (result) => ({
        body: { text: null },
        footer: { text: `💥 Ofc Diego` },
        header: {
            title: result.title,
            hasMediaAttachment: true,
            videoMessage: await createVideo(result.nowm)
        },
        nativeFlowMessage: { buttons: [] }
    })));

    const msgContent = {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: {
                    body: { text: '💥 *TIKTOK SEARCH* 💥' },
                    footer: { text: null },
                    header: { hasMediaAttachment: false },
                    carouselMessage: { cards: push }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(m.chat, msgContent, {});
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
} catch (error) {
    console.log(error);
}
};

handler.command = ['tiktoksearch'];
handler.help = ['tiktoksearch <texto>'];
handler.register = true;
handler.tags = ['search'];

export default handler;