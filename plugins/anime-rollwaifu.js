var handler = async (m, { text,  usedPrefix, command }) => {

// Función para obtener una waifu aleatoria
const waifu = JSON.parse(fs.readFileSync(`./JSON2/rollwaifus.json`))
const json = waifu[Math.floor(Math.random() * waifu.length)]

/*function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}*/

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
conn.reply(m.chat, `🚩 Nombre: ${waifu.name}\n✨️ Fuente: ${waifu.anime}\n💰 Valor: ${waifu.precio}`, m, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
export default handler