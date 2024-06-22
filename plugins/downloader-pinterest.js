import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, text, usedPrefix, command }) => {
  const sections = [{
    title: `${htki} LISTA ${htka}`,
    rows: [{
      header: 'wwww',
      title: "ADMFJ",
      description: 'yyyyyyy',
      id: ".MENU"
    }, {
      title: "ADJNF",
      id: ".MENU"
    }, {
      title: "DNFKV",
      id: ".MENU" 
    }, {
      title: "DHJNS",
      id: ".MENU"
    }, ]
  }, ]  

const listMessage = {
text: 'Texto',
footer: '┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',
title: `❏––––[ *TEX* ]–––`,
buttonText: "- -- -",
sections
  }
async function sendGoogleCarousel(conn, chat, query, usedPrefix) {
let images = await getGoogleImages(query);
const messages = images.map((image) => [ null, null, 
image, 
[['u', usedPrefix + `pinterest ${query}`], ['Buscar con Google 🌐', usedPrefix + `image2 ${query}`]],
null, 
[['🔗 Enlace de imagen', image]], 
[['DDDDD', sections]]
])
if (!text) return m.reply('👑 Ingresa un texto para realizar la búsqueda.')
try {
m.react(rwait)
let { dl_url } = await Scraper.pinterest(text)
//await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `💌 *Resultados De:* ${text}\n${global.textbot}`, m, null, rcanal)
await conn.sendCarousel(chat, '🤩 *Resultados de Google*', 'Imágenes', '✅ Imágenes de Google', messages)
m.react(done)
} catch {
m.react(error)
}}
handler.help = ['pinterest <texto>']
handler.tags = ['internet']
handler.command = ['pinterest']
handler.limit = 1
handler.register = true
export default handler