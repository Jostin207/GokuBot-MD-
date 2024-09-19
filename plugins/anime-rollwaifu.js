var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
{ nombre: 'Ruby Hoshino', anime: 'Oshi no Ko', precio: '5' },
{ nombre: 'Mikasa Ackerman', anime: 'Shingeki no Kyojin', precio: '10' },
{ nombre: 'Asuna Yuuki', anime: 'Sword Art Online', precio: '50' },
{ nombre: 'Rem', anime: 'Re:Zero', precio: '80' },
{ nombre: 'Hestia', anime: 'DanMachi', precio: '100' },
{ nombre: 'Emilia', anime: 'Re:Zero', precio: '120' },
{ nombre: 'Rias Gremory', anime: 'High School DxD', precio: '200' },
{ nombre: 'Saber', anime: 'Fate/stay night', precio: '300' },
{ nombre: 'Mini Yaemori', anime: 'Rent-A-Girlfriend', precio: '400' },
{ nombre: 'Sumi Sakurasawa', anime: 'Rent-A-Girlfriend', precio: '450' },
{ nombre: 'Ai Hoshino', anime: 'Oshi no Ko', precio: '500' },
{ nombre: 'Kana Arima', anime: 'Oshi no Ko', precio: '550' },
{ nombre: 'Akane Kurokawa', anime: 'Oshi no Ko', precio: '600' },
{ nombre: 'Mem-cho', anime: 'Oshi no Ko', precio: '650' },
{ nombre: 'Yotsuba Nakano', anime: 'Las Quintillizas', precio: '700' },
{ nombre: 'Nino Nakano', anime: 'Las Quintillizas', precio: '750' },
{ nombre: 'Miku Nakano', anime: 'Las Quintillizas', precio: '800' },
{ nombre: 'Itsuki Nakano', anime: 'Las Quintillizas', precio: '850' },
{ nombre: 'Daddy Dearest (3)', anime: 'Friday Night Funkin', precio: '855' },
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