import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '🚩 *Por favor, proporciona el nombre de un Pokémon para buscar.*', m, rcanal)
const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;
const response = await fetch(url);
const json = await response.json();
if (!response.ok) {
return conn.reply(m.chat, '🍟 *¡Oops! Parece que hubo un error al buscar el Pokémon. Por favor, inténtalo de nuevo más tarde.*', m, rcanal)}
const message = `🚩 *Pokedex - Información de ${json.name}*\n\n🍟 *Nombre:* ${json.name}\n🍟 *ID:* ${json.id}\n🍟 *Tipo:* ${json.type}\n🍟 *Habilidades:* ${json.abilities}\n*Tamaño:* ${json.height}\n🍟 *Peso:* ${json.weight}\n\n📖 *Descripción:*\n${json.description}\n\n🔍 ¡Encuentra más detalles sobre este Pokémon en la Pokedex! 🔍\n\n🔗 [Pokedex](https://www.pokemon.com/es/pokedex/${json.name.toLowerCase()})`
//conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: fkontak })
conn.reply(m.chat, message, m, rcanal)
}

handler.help = ['pokedex *<pokemon>*']
handler.tags = ['fun']
handler.command = /^pokedex/i
export default handler