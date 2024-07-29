/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '[🌹] _*Utiliza este comando directamente en el número principal del Bot._*', m, rcanal, )
}
await conn.reply(m.chat, '[🌹] _*Iniciando proceso de eliminación de todos los archivos de sesión, excepto el archivo creds.json...*_', m, rcanal, )
m.react(rwait)

let sessionPath = './GokuSession/'

try {

if (!existsSync(sessionPath)) {
return await conn.reply(m.chat, '[🌹] _*La carpeta está vacía.*_', m, rcanal, )
}
let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (const file of files) {
if (file !== 'creds.json') {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
}
}
if (filesDeleted === 0) {
await conn.reply(m.chat, '[🌹] _*La carpeta esta vacía.*_',  m, rcanal, )
} else {
m.react(done)
await conn.reply(m.chat, `[🌹] _*Se eliminaron ${filesDeleted} archivos de sesión, excepto el archivo creds.json*_`,  m, rcanal, )
conn.reply(m.chat, `[🌹] _*¡Hola! ¿logras verme?*_`, m, rcanal, )

}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err);
await conn.reply(m.chat, '🌺 _*Ocurrió un fallo*_',  m, rcanal, )
}

}
handler.help = ['dsowner']
handler.tags = ['fix', 'owner']
handler.command = /^(delgoku2|dsowner|clearallsession)$/i

handler.rowner = true

export default handler