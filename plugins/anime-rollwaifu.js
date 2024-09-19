var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
    { "name": "Noise", "url": "https://telegra.ph/file/ba34a437231411448f6e9.jpg", "value": "5678" },
    { "name": "Akira", "url": "https://telegra.ph/file/475522696fc7d8d1d857a.jpg", "value": "2345" },
    { "name": "Kotori", "url": "https://telegra.ph/file/176ab21ebdca4b4eb962e.jpg", "value": "6789" },
    { "name": "Naida", "url": "https://telegra.ph/file/e36464fbb0b40f429cc43.jpg", "value": 3456 },
    { "name": "Norie", "url": "https://telegra.ph/file/0ae8ad7f097d531cc5acf.jpg", "value": "7890" },
    { "name": "Neptune", "url": "https://telegra.ph/file/84c78cc26889b8da9a8f0.jpg", "value": "4567" },
    { "name": "Yuki", "url": "https://telegra.ph/file/9e2984f5335d1a6b49fc1.jpg", "value": "8901" },
    { "name": "Naya", "url": "https://telegra.ph/file/2baa3b4a81073268a7986.jpg", "value": "5678" },
    { "name": "Yumaki", "url": "https://telegra.ph/file/77e1df4377ea14fb6d66b.jpg", "value": "9012" },
    { "name": "Liza", "url": "https://telegra.ph/file/45ae6406f3bb93fcec9b4.jpg", "value": 6789 },
    { "name": "Nakyra", "url": "https://telegra.ph/file/f2e26a6cb0cb2bc152fb3.jpg", "value": "2345" },
    { "name": "Sekya", "url": "https://telegra.ph/file/cb0330f2d5a0595fdb781.jpg", "value": "8901" },
    { "name": "Blank", "url": "https://telegra.ph/file/4c27664700307c76fef03.jpg", "value": "3456" },
    { "name": "Hidory", "url": "https://telegra.ph/file/1458fc4990244acbb6afb.jpg", "value":  "7890" },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
await conn.sendFile(m.chat, imga.url, 'thumbnail.jpg', `🚩 *Nombre:*\n◇ ${imga.name}\n\n💸 *Valor:*\n◇ ${imga.value}`, fkontak, null, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
export default handler