const lenguaje = () => { return 'es' } //Español, idioma predeterminado de yoshiko

//AVISOS DE MENSAJE  
const smsAvisoMG = () => { return `╰⊱🌩⊱ 𝗘𝗥𝗥𝗢𝗥 ⊱🌩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱🌺⊱ 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 ⊱🌺⊱╮\n\n` }

//jadibots
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Versión de ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`}
const smsIniJadi2 = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Versión de ${global.packname} » _${global.vs}_*
*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_NUEVA FUNCIÓN DE HACERTE UN SUB BOT_* 🟢\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ da click en vincular con codigo de teléfono*\n*4️⃣ pega el codigo a continuación*`}
const smsSoloOwnerJB = () => { return `*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
const smsJBPrincipal = () => { return `🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsreenvia = () => { return `*🟢 REENVIA EL COMANDO...*`}
const smsJBConexion = () => { return `🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
const smsJBConexionClose = () => { return `🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR*`}
const smsJBConexionClose2 = () => { return `🔴 *LA CONEXIÓN SE HA CERRADO, TENDRAS QUE VOLVER A CONECTARSE USANDO:*\n#deletesesion (Para borrar los datos y poder volver a solita el QR o el code)`}
const smsJBConexionTrue = () => { return `🟢 *CONEXIÓN CON ÉXITO!!!*`}
const smsJBConexionTrue2 = () => { return `🟢 *CONEXIÓN CON ÉXITO!!! PUEDE CONECTARSE USANDO SU (ID) O USAR:*`}
const smsJBCargando = () => { return `⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» #stop _(Detener la función Sub Bot)_*\n*» #eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» #serbot _(Obtener nuevo código QR para ser Sub Bot)_*`}

//main.js
const smsWelcome = () => { return `╔═.✵.════ ✰ ════════╗\n@subject\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 (𝙰)!!\n┃ @user\n┃ 𝙻𝙴𝙰 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 🍬\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`}

const smsBye = () => { return `╔═.✵.════ ✰ ════════╗\n- *𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 🌸*\n╚═══════ ✰ ═════.✵.═╝\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙\n┃ @user\n┃ 𝙽𝙾 𝙵𝚄𝙴 𝙳𝙸𝙶𝙽𝙾(𝙰) 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙰𝚀𝚄𝙸 👋🏻\n✧⃝━━━━━━━━━━━━━━━━✦͙͙͙`}

const smsSpromote = () => { return `*⎡ •🍓 Nuevo Admin detectado 🍓• ⎦*\n*━━━━━━━━━━━━━━━━*\n🏷 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdemote = () => { return `*⎡ •🍓 Waoz Un Admin Meno 🍓• ⎦*\n*━━━━━━━━━━━━━━━━*\n🍬 *• Nombre:* @user\n🕒 *• Hora:* ${bottime}\n🗓️ *• Fecha:* ${botdate}\n*━━━━━━━━━━━━━━━━*`}

const smsSdesc = () => { return `❏ 🍬 *Se ha modificado la descripción del grupo.*\n\nNueva Descripción: @desc`}

const smsSsubject = () => { return `❏ 🍬 *Se ha modificado el nombre del grupo.*\nNuevo Nombre: @subject`}

const smsSicon = () => { return `❏ 🍬 *Se ha cambiado la foto del grupo.*`}

const smsSrevoke = () => { return `❏ 🍬 *Se ha actualizado el link del grupo.*\nLink Nuevo: @revoke`}

//propietario
const smsJoin1 = (usedPrefix, command) => { return lenguajeYL['smsAvisoMG']() + `🍓 *𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝙴𝚕 𝙴𝚗𝚕𝚊𝚌𝚎 𝙳𝚎 𝙰𝚕𝚐𝚞𝚗 𝙶𝚛𝚞𝚙𝚘*\n*𝙴𝚓𝚎𝚖𝚙𝚕𝚘:*\n*${usedPrefix + command}* ${gp2}`}

const smsJoin2 = () => { return lenguajeYL['smsAvisoEG']() + `${packname}\n*𝚈𝚊 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘 🍒*`}

const smsJoin = (user) => { return `${packname}\n_🍬 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘_\n\n🧃 *𝙵𝚞𝚎 𝙰𝚐𝚛𝚎𝚐𝚊𝚍𝚊 𝙿𝚘𝚛: @${user}*`}

export default { lenguaje, smsAvisoMG, smsAvisoEG,  smsIniJadi, smsIniJadi2, smsSoloOwnerJB, smsJBPrincipal, smsreenvia, smsJBConexion, smsJBConexionClose, smsJBConexionClose2, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsJoin1, smsJoin2, smsJoin}