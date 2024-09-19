
    { "name": "Ami Kawashima", "url": "https://telegra.ph/file/6651dd0fc49bc4244e340.jpg", "value": 1939 },
    { "name": "Amina", "url": "https://telegra.ph/file/ab0fddf690ec6e8f701f4.jpg", "value": 839 },
    { "name": "Hanya", "url": "https://telegra.ph/file/f43af2894c849c46141d8.jpg", "value": 3930 },
    { "name": "Miyamura", "url": "https://telegra.ph/file/e3b19d9a2628e0ae2c564.jpg", "value": 2000 },
    { "name": "Aramaki Shizuka", "url": "https://telegra.ph/file/2f52f1585db9562206033.jpg", "value": 4939 },
    { "name": "Arcueid Brunestud", "url": "https://telegra.ph/file/e8e4eab84c5b6ebd1d1c4.jpg", "value": 5393 },
    { "name": "Asahina Mikuru", "url": "https://telegra.ph/file/6fce764bc641089b977f1.jpg", "value": 1343 },
    { "name": "Asuna Yuuki", "url": "https://telegra.ph/file/4aef3dffdca0052bbf9ff.jpg", "value": 4949 },
    { "name": "Asuka Langley Soryu", "url": "https://telegra.ph/file/43b9afe7e61bdea03208a.jpg", "value": 1939 },
    { "name": "Asura", "url": "https://telegra.ph/file/fcab655fcc521d77919c4.jpg", "value": 3949 },
    { "name": "Ayaka", "url": "https://telegra.ph/file/d654514d38d71fff25324.jpg", "value": 1737 },
    { "name": "Ayano Tateyama", "url": "https://telegra.ph/file/406f3ac65c9edcaa583d1.jpg", "value": 4737 },
    { "name": "Beatrice", "url": "https://telegra.ph/file/284512852066388d04d1d.jpg", "value": 2737 },
    { "name": "Bell Cranel", "url": "https://telegra.ph/file/c23cda52e84822cfdc313.jpg", "value": 2662 },
    { "name": "Bishamon", "url": "https://telegra.ph/file/9be5273b562634de43abe.jpg", "value": 626 },
    { "name": "Blake Belladonna", "url": "https://telegra.ph/file/364c72e563edda8ab5d1d.jpg", "value": 3738 },
    { "name": "Ciel Phantomhive", "url": "https://telegra.ph/file/45614ef17d77712c42692.jpg", "value": 4938 },
    { "name": "Clementine", "url": "https://telegra.ph/file/bb864f9c8d6144adabd3f.jpg", "value": 1928 },
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