import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('👑 Ingresa un texto para realizar la búsqueda.')
try {
m.react(rwait)
let { dl_url } = await Scraper.pinterest(text)
//await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', null, m)
    const selectedResults = results.slice(0, 7);

    const push = await Promise.all(selectedResults.map(async (result) => ({
        body: { text: null },
        footer: { text: `💥 Ofc Diego` },
        header: {
            title: `${text}`,
            hasMediaAttachment: true,
            videoMessage: await createVideo(dl_url)
        },
        nativeFlowMessage: { buttons: [] }
    })));

    const msgContent = {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: {
                    body: { text: '💥 *PINTEREST* 💥' },
                    footer: { text: null },
                    header: { hasMediaAttachment: false },
                    carouselMessage: { cards: push }
                }
            }
        }
    };
m.react(done)
} catch {
}}
handler.help = ['pinterest <texto>']
handler.tags = ['internet']
handler.command = ['pinterest']
handler.limit = 1
handler.register = true
export default handler