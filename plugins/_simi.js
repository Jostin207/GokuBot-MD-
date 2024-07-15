import translate from '@vitalets/google-translate-api';
import axios from 'axios';
import fetch from 'node-fetch';
const handler = (m) => m; 

handler.before = async (m) => {
  if (m.sender === conn.user.jid) return;

  const chat = global.db.data.chats[m.chat];
  if (chat.simi) {
   try {
    let textodem = m.text;
    if (m.text.includes('serbot') || m.text.includes('bots')|| m.text.includes('jadibot')|| m.text.includes('menu')|| m.text.includes('play')|| m.text.includes('play2') || m.text.includes('playdoc') || m.text.includes('tiktok') || m.text.includes('facebook') || m.text.includes('menu2') ||  m.text.includes('infobot') || m.text.includes('estado') ||  m.text.includes('ping') ||  m.text.includes('instalarbot') ||  m.text.includes('sc') ||  m.text.includes('sticker') ||  m.text.includes('s') || m.text.includes('wm') ||  m.text.includes('qc')) return
      const ressimi = await simitalk(textodem);
      await m.conn.sendMessage(m.chat, { text: ressimi.resultado.simsimi }, { quoted: fkontak });
  } catch (err) {
console.log("💭 Error", err)}
}
};

export default handler;

async function simitalk(ask, apikeyyy = "iJ6FxuA9vxlvz5cKQCt3", language = "es") {
    if (!ask) return { status: false, resultado: { msg: "🥷 Debes ingresar un texto para hablar con SimSimi." }};
    try {
        const response1 = await axios.get(`https://delirios-api-delta.vercel.app/tools/simi?text=${encodeURIComponent(ask)}`);
        const trad1 = await translate(`${response1.data.data.message}`, {to: language, autoCorrect: true});
        if (trad1.text == 'indefinida' || response1 == '' || !response1.data) trad1 = XD 
        return { status: true, resultado: { simsimi: trad1.text }};        
    } catch {
        try {
            const response2 = await axios.get(`https://anbusec.xyz/api/v1/simitalk?apikey=${apikeyyy}&ask=${ask}&lc=${language}`);
            return { status: true, resultado: { simsimi: response2.data.message }};       
        } catch (error2) {
            return { status: false, resultado: { msg: "🏓 Todas las Api's se cayeron, prueba a intentar más tarde.", error: error2.message }};
        }
    }
}