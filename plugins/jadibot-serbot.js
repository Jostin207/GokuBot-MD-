/*⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic 

El codigo de este archivo fue parchado por:
- ReyEndymion 
- BrunoSobrino 

Contenido adaptado por:
- GataNina-Li 
- elrebelde21
- AzamiJs
- Diego-YL-177
*/

import _0x12e4e2 from 'qrcode';
import _0x4b6517 from 'node-cache';
import _0x1b3c69 from 'fs';
import 'path';
import _0xb26b51 from 'pino';
import 'util';
import 'ws';
import { makeWASocket } from '../lib/simple.js';
let rtx = '' + lenguajeYL.smsIniJadi();
let rtx2 = '' + lenguajeYL.smsIniJadi2();
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
let handler = async (_0x1db94b, {
  conn: _0x15d4c7,
  args: _0x41f9dd,
  usedPrefix: _0x16e163,
  command: _0x50429b,
  isOwner: _0x51fda8
}) => {
  if (!global.db.data.settings[_0x15d4c7.user.jid].jadibotmd) {
    return _0x1db94b.reply('' + lenguajeYL.smsSoloOwnerJB());
  }
  if (_0x15d4c7.user.jid !== global.conn.user.jid) {
    return _0x15d4c7.reply(_0x1db94b.chat, lenguajeYL.smsJBPrincipal() + " wa.me/" + global.conn.user.jid.split`@`[0x0] + "&text=" + (_0x16e163 + _0x50429b), _0x1db94b);
  }
  const _0x3c1bb8 = _0x41f9dd[0x0] && _0x41f9dd[0x0].includes("--code") ? true : !!(_0x41f9dd[0x1] && _0x41f9dd[0x1].includes("--code"));
  let _0x4c2db5 = _0x1db94b.mentionedJid && _0x1db94b.mentionedJid[0x0] ? _0x1db94b.mentionedJid[0x0] : _0x1db94b.fromMe ? _0x15d4c7.user.jid : _0x1db94b.sender;
  let _0x246566 = '' + _0x4c2db5.split`@`[0x0];
  if (_0x3c1bb8) {
    _0x41f9dd[0x0] = _0x41f9dd[0x0].replace('--code', '').trim();
    if (_0x41f9dd[0x1]) {
      _0x41f9dd[0x1] = _0x41f9dd[0x1].replace("--code", '').trim();
    }
    if (_0x41f9dd[0x0] == '') {
      _0x41f9dd[0x0] = undefined;
    }
    console.log(_0x41f9dd[0x0]);
  }
  if (!_0x1b3c69.existsSync("./YoshiJadiBot/" + _0x246566)) {
    _0x1b3c69.mkdirSync('./YoshiJadiBot/' + _0x246566, {
      'recursive': true
    });
  }
  if (_0x41f9dd[0x0] && _0x41f9dd[0x0] != undefined) {
    _0x1b3c69.writeFileSync("./YoshiJadiBot/" + _0x246566 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x41f9dd[0x0], "base64").toString("utf-8")), null, "\t"));
  } else {
    '';
  }
  if (_0x1b3c69.existsSync("./YoshiJadiBot/" + _0x246566 + "/creds.json")) {
    let _0x566201 = JSON.parse(_0x1b3c69.readFileSync("./YoshiJadiBot/" + _0x246566 + "/creds.json"));
    if (_0x566201) {
      if (_0x566201.registered = false) {
        _0x1b3c69.unlinkSync("./YoshiJadiBot/" + _0x246566 + "/creds.json");
      }
    }
  }
  const _0x301689 = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", 'base64');
  exec(_0x301689.toString("utf-8"), async (_0x94dde0, _0x20574d, _0x26e932) => {
    const _0x3e5ea9 = Buffer.from("CkphZGlib3QsIEhlY2hvIHBvciBAQWlkZW5fTm90TG9naWM", "base64");
    async function _0x3f6051() {
      let _0x25ab59 = _0x1db94b.mentionedJid && _0x1db94b.mentionedJid[0x0] ? _0x1db94b.mentionedJid[0x0] : _0x1db94b.fromMe ? _0x15d4c7.user.jid : _0x1db94b.sender;
      let _0x22bb22 = '' + _0x25ab59.split`@`[0x0];
      if (!_0x1b3c69.existsSync("./GataJadiBot/" + _0x22bb22)) {
        _0x1b3c69.mkdirSync("./YoshiJadiBot/" + _0x22bb22, {
          'recursive': true
        });
      }
      if (_0x41f9dd[0x0]) {
        _0x1b3c69.writeFileSync("./YoshiJadiBot/" + _0x22bb22 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x41f9dd[0x0], 'base64').toString('utf-8')), null, "\t"));
      } else {
        '';
      }
      const _0x2abe77 = _0x597bfa => {};
      const _0x3ef11 = new _0x4b6517();
      const _0x391581 = {
        'printQRInTerminal': false,
        'logger': _0xb26b51({
          'level': "silent"
        }),
        'auth': {
          'creds': _0x477821.creds,
          'keys': makeCacheableSignalKeyStore(_0x477821.keys, _0xb26b51({
            'level': "silent"
          }))
        },
        'msgRetry': _0x2abe77,
        'msgRetryCache': _0x3ef11,
        'version': _0x13934b,
        'syncFullHistory': true,
        'browser': _0x3c1bb8 ? ['Ubuntu', "Chrome", "110.0.5585.95"] : ["YoshikoBot - Sub Bot", 'Chrome', "2.0.0"],
        'defaultQueryTimeoutMs': undefined,
        'getMessage': async _0x348f61 => {
          if (store) {}
          return {
            'conversation': "YoshikoBot-MD"
          };
        }
      };
      let _0xf3d377 = makeWASocket(_0x391581);
      _0xf3d377.isInit = false;
      let _0x290202 = true;
      async function _0x2de2d2(_0x2c4023) {
        const {
          connection: _0x3905e1,
          lastDisconnect: _0x110d9d,
          isNewLogin: _0x24883d,
          qr: _0x44c7e5
        } = _0x2c4023;
        if (_0x24883d) {
          _0xf3d377.isInit = false;
        }
        if (_0x44c7e5 && !_0x3c1bb8) {
          return _0x15d4c7.sendMessage(_0x1db94b.chat, {
            'image': await _0x12e4e2.toBuffer(_0x44c7e5, {
              'scale': 0x8
            }),
            'caption': rtx + _0x3e5ea9.toString("utf-8")
          }, {
            'quoted': _0x1db94b
          });
        }
        if (_0x44c7e5 && _0x3c1bb8) {
          _0x15d4c7.sendMessage(_0x1db94b.chat, {
            'text': rtx2 + _0x3e5ea9.toString("utf-8")
          }, {
            'quoted': _0x1db94b
          });
          await sleep(0x1388);
          let _0x177199 = await _0xf3d377.requestPairingCode(_0x1db94b.sender.split`@`[0x0]);
          await _0x1db94b.reply(_0x177199);
        }
        const _0x528604 = _0x110d9d?.['error']?.["output"]?.["statusCode"] || _0x110d9d?.['error']?.["output"]?.["payload"]?.["statusCode"];
        console.log(_0x528604);
        const _0x480a7f = async _0x1a17bf => {
          if (!_0x1a17bf) {
            try {
              _0xf3d377.ws.close();
            } catch {}
            _0xf3d377.ev.removeAllListeners();
            let _0x2d5e07 = global.conns.indexOf(_0xf3d377);
            if (_0x2d5e07 < 0x0) {
              return;
            }
            delete global.conns[_0x2d5e07];
            global.conns.splice(_0x2d5e07, 0x1);
          }
        };
        const _0x4981e1 = _0x110d9d?.['error']?.["output"]?.['statusCode'] || _0x110d9d?.["error"]?.["output"]?.["payload"]?.['statusCode'];
        if (_0x3905e1 === "close") {
          console.log(_0x4981e1);
          if (_0x4981e1 == 0x195) {
            await _0x1b3c69.unlinkSync("./YoshiJadiBot/" + _0x22bb22 + "/creds.json");
            return await _0x1db94b.reply(lenguajeYL.smsreenvia());
          }
          if (_0x4981e1 === DisconnectReason.restartRequired) {
            _0x3f6051();
            return console.log(lenguajeYL.smsConexionreem());
          } else {
            if (_0x4981e1 === DisconnectReason.loggedOut) {
              sleep(0xfa0);
              return _0x1db94b.reply(lenguajeYL.smsJBConexionClose2());
            } else {
              if (_0x4981e1 == 0x1ac) {
                await _0x480a7f(false);
                return _0x1db94b.reply(lenguajeYL.smsJBConexion());
              } else {
                if (_0x4981e1 === DisconnectReason.connectionLost) {
                  await _0x3f6051();
                  return console.log(lenguajeYL.smsConexionperdida());
                } else {
                  if (_0x4981e1 === DisconnectReason.badSession) {
                    return await _0x1db94b.reply(lenguajeYL.smsJBConexionClose());
                  } else {
                    if (_0x4981e1 === DisconnectReason.timedOut) {
                      await _0x480a7f(false);
                      return console.log(lenguajeYL.smsConexiontiem());
                    } else {
                      console.log(lenguajeYL.smsConexiondescon());
                    }
                  }
                }
              }
            }
          }
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x3905e1 == 'open') {
          _0xf3d377.isInit = true;
          global.conns.push(_0xf3d377);
          await _0x15d4c7.sendMessage(_0x1db94b.chat, {
            'text': _0x41f9dd[0x0] ? '' + lenguajeYL.smsJBCargando(_0x16e163) : '' + lenguajeYL.smsJBConexionTrue2() + (" " + (_0x16e163 + _0x50429b))
          }, {
            'quoted': _0x1db94b
          });
          await sleep(0x1388);
          if (!_0x41f9dd[0x0]) {
            _0x15d4c7.sendMessage(_0x1db94b.chat, {
              'text': _0x16e163 + _0x50429b + " " + Buffer.from(_0x1b3c69.readFileSync("./YoshiJadiBot/" + _0x22bb22 + "/creds.json"), "utf-8").toString("base64")
            }, {
              'quoted': _0x1db94b
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0xf3d377.user) {
          try {
            _0xf3d377.ws.close();
          } catch (_0x278c7b) {
            console.log(await _0x5591f8(true)["catch"](console.error));
          }
          _0xf3d377.ev.removeAllListeners();
          let _0x4ae115 = global.conns.indexOf(_0xf3d377);
          if (_0x4ae115 < 0x0) {
            return;
          }
          delete global.conns[_0x4ae115];
          global.conns.splice(_0x4ae115, 0x1);
        }
      }, 0xea60);
      let _0x129260 = await import("../handler.js");
      let _0x5591f8 = async function (_0x4056bf) {
        try {
          const _0x4b007b = await import("../handler.js?update=" + Date.now())['catch'](console.error);
          if (Object.keys(_0x4b007b || {}).length) {
            _0x129260 = _0x4b007b;
          }
        } catch (_0xcf8594) {
          console.error(_0xcf8594);
        }
        if (_0x4056bf) {
          const _0x163d77 = _0xf3d377.chats;
          try {
            _0xf3d377.ws.close();
          } catch {}
          _0xf3d377.ev.removeAllListeners();
          _0xf3d377 = makeWASocket(_0x391581, {
            'chats': _0x163d77
          });
          _0x290202 = true;
        }
        if (!_0x290202) {
          _0xf3d377.ev.off('messages.upsert', _0xf3d377.handler);
          _0xf3d377.ev.off("group-participants.update", _0xf3d377.participantsUpdate);
          _0xf3d377.ev.off("groups.update", _0xf3d377.groupsUpdate);
          _0xf3d377.ev.off("message.delete", _0xf3d377.onDelete);
          _0xf3d377.ev.off("call", _0xf3d377.onCall);
          _0xf3d377.ev.off("connection.update", _0xf3d377.connectionUpdate);
          _0xf3d377.ev.off("creds.update", _0xf3d377.credsUpdate);
        }
        _0xf3d377.welcome = lenguajeYL.smsWelcome();
        _0xf3d377.bye = lenguajeYL.smsBye();
        _0xf3d377.spromote = lenguajeYL.smsSpromote();
        _0xf3d377.sdemote = lenguajeYL.smsSdemote();
        _0xf3d377.sDesc = lenguajeYL.smsSdesc();
        _0xf3d377.sSubject = lenguajeYL.smsSsubject();
        _0xf3d377.sIcon = lenguajeYL.smsSicon();
        _0xf3d377.sRevoke = lenguajeYL.smsSrevoke();
        _0xf3d377.handler = _0x129260.handler.bind(_0xf3d377);
        _0xf3d377.participantsUpdate = _0x129260.participantsUpdate.bind(_0xf3d377);
        _0xf3d377.groupsUpdate = _0x129260.groupsUpdate.bind(_0xf3d377);
        _0xf3d377.onDelete = _0x129260.deleteUpdate.bind(_0xf3d377);
        _0xf3d377.onCall = _0x129260.callUpdate.bind(_0xf3d377);
        _0xf3d377.connectionUpdate = _0x2de2d2.bind(_0xf3d377);
        _0xf3d377.credsUpdate = _0x29a03b.bind(_0xf3d377, true);
        const _0x1b4f9c = new Date();
        const _0x555ac5 = new Date(_0xf3d377.ev * 0x3e8);
        if (_0x1b4f9c.getTime() - _0x555ac5.getTime() <= 0x493e0) {
          console.log("Leyendo mensaje entrante:", _0xf3d377.ev);
          Object.keys(_0xf3d377.chats).forEach(_0x2afbd0 => {
            _0xf3d377.chats[_0x2afbd0].isBanned = false;
          });
        } else {
          console.log(_0xf3d377.chats, "Omitiendo mensajes en espera.", _0xf3d377.ev);
          Object.keys(_0xf3d377.chats).forEach(_0x3dea41 => {
            _0xf3d377.chats[_0x3dea41].isBanned = true;
          });
        }
        _0xf3d377.ev.on("messages.upsert", _0xf3d377.handler);
        _0xf3d377.ev.on("group-participants.update", _0xf3d377.participantsUpdate);
        _0xf3d377.ev.on('groups.update', _0xf3d377.groupsUpdate);
        _0xf3d377.ev.on("message.delete", _0xf3d377.onDelete);
        _0xf3d377.ev.on("call", _0xf3d377.onCall);
        _0xf3d377.ev.on("connection.update", _0xf3d377.connectionUpdate);
        _0xf3d377.ev.on("creds.update", _0xf3d377.credsUpdate);
        _0x290202 = false;
        return true;
      };
      _0x5591f8(false);
    }
    _0x3f6051();
  });
};
handler.help = ["jadibot", "serbot", "getcode", "rentbot"];
handler.tags = ["jadibot"];
handler.command = /^(get)/i;
handler.register = true;
export default handler;
function sleep(_0x68f623) {
  return new Promise(_0x515ebc => setTimeout(_0x515ebc, _0x68f623));
}