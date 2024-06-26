import { DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser } from '@whiskeysockets/baileys'
import qrcode from 'qrcode'
import fs from 'fs'
import pino from 'pino'
import crypto from 'crypto'
import NodeCache from 'node-cache'
import { makeWASocket } from '../lib/simple.js'
if (global.conns instanceof Array) {
console.log()
} else {
global.conns = []
}
let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd ) {
m.reply('🤍 Este Comando está deshabilitado por mi creador.')
return
}
let parentw = args[0] && args[0] == "plz" ? conn : await global.conn
if (!(args[0] && args[0] == 'plz' || (await global.conn).user.jid == conn.user.jid)) {
return m.reply("「💭」Solo puedes usar este comando en el bot principal.\n\n• Wa.me" + global.conn.user.jid.split`@`[0x0] + "?text=" + usedPrefix + "qr")
}
async function serbot() {
let serbotFolder = crypto.randomBytes(10).toString('hex').slice(0, 8)
let folderSub = `./ZeroJadiBot/${serbotFolder}`
if (!fs.existsSync(folderSub)) {
fs.mkdirSync(folderSub, { recursive: true })
}
if (args[0]) {
fs.writeFileSync(`${folderSub}/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'))
}
const { state, saveCreds } = await useMultiFileAuthState(folderSub)
const msgRetryCounterCache = new NodeCache()
const { version } = await fetchLatestBaileysVersion()
const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: [`Emilia Rezero (Sub-Bot)`, 'Safari', '2.0.0'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
version
}
let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) {
conn.isInit = true
}
if (qr) {
let txt = `𝗦𝗲𝗿 𝗝𝗮𝗱𝗶𝗯𝗼𝘁 𝗘𝗺𝗶𝗹𝗶𝗮 𝗥𝗲:𝘇𝗲𝗿𝗼 🤍\n\n🚀 *Escanea Este Codigo QR Para Convertirte En Un Sub Bot Temporal.*\n\n🎌 *Pasos Para Escanear:*\n\n1. Diríjase a los tres puntos ubicado en la esquina superior derecha.\n\n2. Ir a la opción dispositivos vinculados.\n\n3. Da Click En Vincular Dispositivo & escanea este codigo qr.\n\n📢 *Aviso:* Este Código QR Expira En 45 Segundos.\n\n𝗕𝘆: ${packname}`
let sendQR = await parentw.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), "qrcode.png", txt, m)
setTimeout(() => {
parentw.sendMessage(m.chat, { delete: sendQR.key })
}, 30000)
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn)
if (i < 0) {
return console.log(await creloadHandler(true).catch(console.error))
}
delete global.conns[i]
global.conns.splice(i, 1)
if (code !== DisconnectReason.connectionClosed) {
await parentw.reply(conn.user.jid, "💙 Conexión perdida con el servidor.", m)
}
}
if (global.db.data == null) {
loadDatabase()
}
if (connection == "open") {
conn.isInit = true
global.conns.push(conn)
await parentw.reply(m.chat, args[0] ? '🤍 Conectado con éxito al WhatsApp.' : '🖤 Vinculaste un Sub-Bot con éxito.', m, fake)
await sleep(5000)
if (args[0]) {
return
}
await parentw.reply(conn.user.jid, `🤍 La próxima vez inicia Sesión con tu Token de Sub-Bot.\n✰ Use *{usedPrefix}token* para saber su Token.`, m, fake)
}
}
const timeoutId = setTimeout(() => {
if (!conn.user) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)
if (i >= 0) {
delete global.conns[i]
global.conns.splice(i, 1)
}
fs.rmdirSync(`./ZeroJadiBot/${serbotFolder}`, { recursive: true })
}
}, 30000)
let handler = await import("../handler.js")
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) {
handler = Handler
}
} catch (e) {
console.error(e)
}
if (restatConn) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}
if (!isInit) {
conn.ev.off("messages.upsert", conn.handler)
conn.ev.off("connection.update", conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)
conn.ev.on("messages.upsert", conn.handler)
conn.ev.on("connection.update", conn.connectionUpdate)
conn.ev.on("creds.update", conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
serbot()
}
handler.help = ["qr", "serbot"]
handler.tags = ["jadibot"]
handler.command = ["qr", "serbot"]
handler.register = true
export default handler
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}