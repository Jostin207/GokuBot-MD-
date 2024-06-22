import fetch from "node-fetch"

let handler = async (m, { conn, usedPrefix, command, text }) => {
let query = text.trim()

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

async function getPinterestImages(query) {
let response = await fetch(`https://aemt.me/pinterest?query=${encodeURIComponent(query)}`)
let data = await response.json()
return data.result
}

async function getGoogleImages(query) {
let response = await fetch(`https://aemt.me/googleimage?query=${encodeURIComponent(query)}`)
let data = await response.json()
return data.result
}

async function sendPinterestCarousel(conn, chat, query, usedPrefix) {
let images = await getPinterestImages(query)
const messages = images.map((image) => [ null, null, 
image, 
[['u', usedPrefix + `pinterest ${query}`], ['Buscar con Google 🌐', usedPrefix + `image2 ${query}`]],
null, 
[['🔗 Enlace de imagen', image]], 
[['DDDDD', sections]]
])
await conn.sendCarousel(chat, '💗 *Resultados de Pinterest*', 'Imágenes', '✨ Imágenes de Pinterest', messages)
}

async function sendGoogleCarousel(conn, chat, query, usedPrefix) {
let images = await getGoogleImages(query);
const messages = images.map((image) => [ null, null, 
image, 
[['Buscar de nuevo 🔎', usedPrefix + `image2 ${query}`], ['Buscar con Pinterest ✨', usedPrefix + `pinterest ${query}`]], 
null, 
[['🔗 Enlace de imagen', image]], 
[]
])
await conn.sendCarousel(chat, '🤩 *Resultados de Google*', 'Imágenes', '✅ Imágenes de Google', messages)
}

if (!query) {
conn.reply(m.chat, '*Por favor, escribe lo que quieres buscar en Pinterest.*', m)
return
}

if (command === 'pinterest') {
await sendPinterestCarousel(conn, m.chat, query)
} else if (command === 'image2') {
await sendGoogleCarousel(conn, m.chat, query)
}
}

handler.command = /^(pinterest|image2)$/i
export default handler