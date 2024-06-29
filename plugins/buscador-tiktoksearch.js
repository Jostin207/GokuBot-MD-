import Scraper from '@SumiFX/Scraper'
let handler = async (m, {conn, text}) => {
    try {
    if (!text) return conn.reply(m.chat, '🧡 Ingresa un texto para realizar la busqueda.', m, rcanal)
    await m.react(rwait)
    let {dl_url, author, likes} = await Starlights.tiktokvid(text)
    let txt = `✨️ *BUSQUEDA - TIKTOK*\n✰ *Titulo:* ${text}\n◈ *Autor:* ${author}\n◈ *Likes:* ${likes}`
    conn.sendFile(m.chat, dl_url, text + '.mp4', txt, m, fake, )
    await m.react(done)
} catch (e){
        m.reply('💥 Ocurrió un error inesperado.')
        console.log(e)
}
}
handler.help = ['tiktoksearch <texto>']
handler.command = ['tiktokvid', 'tiktoksearch', 'ttv']
handler.register = true
handler.tags = ['buscador']
export default handler
