var handler = async (m, { text,  usedPrefix, command }) => {

// Función para obtener una waifu aleatoria

function obtenerWaifuAleatoria() {
const imga = JSON.parse(fs.readFileSync(`./src/JSON2/rollwaifu.js`))
const indiceAleatorio = Math.floor(Math.random() * imga.length)
return imga[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
conn.reply(m.chat, `${waifu.name}`, m, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
export default handler