import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('👑 Ingresa un texto para realizar la búsqueda.')
const sections = [{
title: `Título de la sección`,
rows: [
{ header: 'Encabezado1', title: "Título1", description: 'Descripción1', id: usedPrefix + "menu" }, 
{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: "Id2" }, 
{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: "Id3" }, 
{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: "Id4" }, 
]},]  
const messages = [[ // CARRUSEL 1
'Descripción de Carrusel 1', 
'Footer de Carrusel 1',
'https://telegra.ph/file/24b24c495b5384b218b2f.jpg',
[['Botón1', usedPrefix + 'menu'], ['Botón2', 'Id2'] /* etc... */],
[['Texto para copiar 1'], ['Texto para copiar 2'] /* etc... */],
[['Enlace1', canal2], ['Enlace2', 'https://example.com/link2'] /* etc... */]]
try {
m.react(rwait)
let { dl_url } = await Scraper.pinterest(text)
//await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `💌 *Resultados De:* ${text}\n${global.textbot}`, m, null, rcanal)
await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Titulo de Carrusel', messages, m)            
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