/*
《✧》 DERECHOS RESERVADOS DEL AUTOR《✧》
- おDiego.xyz (@Dev-Diego)
*/

var handler = async (m, { conn, text,  usedPrefix, command }) => {

//rollwaifu
const devofc = [
{ name: 'Blank', url: 'https://telegra.ph/file/4c27664700307c76fef03.jpg', value: '650' },
{ name: 'Nakyra', url: 'https://telegra.ph/file/f2e26a6cb0cb2bc152fb3.jpg', value: '730' },
{ name: 'Liza', url: 'https://telegra.ph/file/45ae6406f3bb93fcec9b4.jpg', value: '800' },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * devofc.length)
return devofc[indiceAleatorio]}

try {
await m.react(rwait)

if (!res.ok) return conn.reply(m.chat, '🚩 Error al obtener la información de la waifu.', m, fake)

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
await conn.sendFile(m.chat, devofc.url, 'thumbnail.jpg', `🚩 *Nombre:*\n◇ ${devofc.name}\n\n💸 *Valor:*\n◇ ${devofc.value}`, fkontak, null, rcanal)}
await m.react(done)

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)

} catch (e) {
console.log(e)
await m.react(error)
await conn.reply(m.chat, ' 🚩 Ocurrió un error', m fake)}}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
export default handler