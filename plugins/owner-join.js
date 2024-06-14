//Codigo GataBotLite-MD, By: GataNina-Li, Adaptado Por: Diego-YL-177

import fs from 'fs' 
import { execSync } from 'child_process'
import { spawn } from 'child_process'
import chalk from "chalk" 

let handler = async (m, { conn, command, usedPrefix, text, isAdmin, isOwner, isROwner, participants, groupMetadata  }) => {

const isCommand1 = /^(join|nuevogrupo|newgrupo|unete)$/i.test(command)

async function reportError(e) {
await m.reply(`🥷 Error`)
console.log(`🥷 Error`)
console.log(e)
}

switch (true) {     
case isCommand1:
let user = m.sender.split('@')[0] 
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_1, code1] = link.match(linkRegex) || []
if (!code1) return m.reply(`╰⊱🌩⊱ 𝗘𝗥𝗥𝗢𝗥 ⊱🌩⊱╮\n\n🍓 *𝙸𝚗𝚐𝚛𝚎𝚜𝚎 𝙴𝚕 𝙴𝚗𝚕𝚊𝚌𝚎 𝙳𝚎 𝙰𝚕𝚐𝚞𝚗 𝙶𝚛𝚞𝚙𝚘*\n*𝙴𝚓𝚎𝚖𝚙𝚕𝚘:*\n*${usedPrefix + command}* ${gp2}`)
try {      
if ( isOwner || m.fromMe) {
await m.reply(`╰⊱🌺⊱ 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 ⊱🌺⊱╮\n\n${packname}\n*𝚈𝚊 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘 🍒*`)
let res1 = await conn.groupAcceptInvite(code1)
await conn.sendMessage(res1, { text: `${packname}\n_🍬 𝚂𝚎 𝙷𝚊 𝚄𝚗𝚒𝚍𝚘 𝙰𝚕 𝙶𝚛𝚞𝚙𝚘_\n\n🧃 *𝙵𝚞𝚎 𝙰𝚐𝚛𝚎𝚐𝚊𝚍𝚊 𝙿𝚘𝚛: @${user}`, mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })
}} catch (e) {
reportError(e)
}        
break

}}
handler.command = /^(join|nuevogrupo|newgrupo|unete)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const delay = time => new Promise(res => setTimeout(res, time))