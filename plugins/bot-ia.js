import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return conn.reply(m.chat, `💌 Ingrese una petición para que la AI lo responda, Ejemplo:\n> *${usedPrefix + command} Código de una Calculadora en Js*`, m, fake, )   
try {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`)
let res = await gpt.json()
await m.reply(res.data) 
} catch{
}}}
handler.help = ['chatgpt <texto>', 'ia <texto>']
handler.tags = ['ai']
handler.register = true
handler.limit = 5
handler.command = ['ia', 'chatgpt']

export default handler;