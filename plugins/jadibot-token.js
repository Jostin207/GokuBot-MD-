import fs from "fs"
async function handler(m, {usedPrefix}) {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./ZeroJadiBot/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./ZeroJadiBot/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`El token te permite iniciar sesion en otros bots, recomendamos no compartirlo con nadie.\n\n*Tu token es:*`)
        await m.reply(token)
    } else {
        await m.reply(`*No Tienes Ningun Token Activo, Utiliza: ${usedPrefix}botclone Para Crear Un Token ☁️.*`)
    }
  }
  handler.command = handler.help = ['token', 'gettoken', 'serbottoken'];
  handler.tags = ['jadibot'];
  handler.register = true
  handler.private = true
  export default handler;
