import similarity from 'similarity';
const threshold = 0.72;
const handler = (m) => m;
handler.before = async function(m) {
  const id = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^🤍\*ACERTIJOS\*/i.test(m.quoted.text)) return true;
  this.tekateki = this.tekateki ? this.tekateki : {};
  if (!(id in this.tekateki)) return m.reply('✧ Ese acertijo ya ha terminado!');
  if (m.quoted.id === this.tekateki[id][0].id) {
    const json = JSON.parse(JSON.stringify(this.tekateki[id][1]));
    if (m.text.toLowerCase() === json.response.toLowerCase().trim()) {
      global.db.data.users[m.sender].alisacoins += this.tekateki[id][2];
      m.reply(`💥 Respuesta correcta, ganaste *+${this.tekateki[id][2]}* ${global.botcoins}`);
      clearTimeout(this.tekateki[id][3]);
      delete this.tekateki[id];
    } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
      m.reply('☁️ Casi lo logras!');
    } else {
      m.reply('🤍 Respuesta incorrecta!');
    }
  }
  return true;
};
export default handler;