import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*🌿Error Por Favor Envie Un Link De Mediafire, Similar A: ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;
  try {
    const resEX = await mediafiredl(args[0]);
    let txt = `乂  *M E D I A F I R E  -  D O W N L O A D*  乂\n\n`
    txt += `✩ *Nombre* : ${title}\n`
    txt += `✩ *Peso* : ${size}\n`
    txt += `✩ *Publicado* : ${aploud}\n`
    txt += `✩ *MimeType* : ${ext}\n\n`
    txt += `*- ↻ El archivo se esta enviando espera un momento, soy lento. . .*`
     m.reply(captionES);
    let img = await (await fetch('https://i.ibb.co/wLQFn7q/logo-mediafire.jpg')).buffer()
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendFile(m.chat, dl_url, title, null, m, null, { mimetype: ext, asDocument: true })
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
N L O A D*  乂\n\n`
    txt += `✩ *Nombre* : ${title}\n`
    txt += `✩ *Peso* : ${size}\n`
    txt += `✩ *Publicado* : ${aploud}\n`
    txt += `✩ *MimeType* : ${ext}\n\n`
    txt += `*- ↻ El archivo se esta enviando espera un momento, soy lento. . .*`
       await m.reply(caption);
      let img = await (await fetch('https://i.ibb.co/wLQFn7q/logo-mediafire.jpg')).buffer()
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendFile(m.chat, dl_url, title, null, m, null, { mimetype: ext, asDocument: true })
    } catch {
      await m.reply('*🌿Error Por Favor Envie Un Link De Mediafire, Similar A:*\n*◉ https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['descargas'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}