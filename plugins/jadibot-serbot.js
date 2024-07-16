const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  jidNormalizedUser
} = await import("@whiskeysockets/baileys");
import _0x34f280 from 'qrcode';
import _0x157bec from 'fs';
import _0x3b5778 from 'pino';
import 'ws';
//import _0x202133 from 'md5';
const {
  child,
  spawn,
  exec
} = await import("child_process");
import { makeWASocket } from '../lib/simple.js';
import _0xbb6b61 from '../lib/store.js';
import _0xb0f008 from 'node-cache';
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
if (global.dataconst instanceof Array) {
  console.log();
} else {
  global.dataconst = [];
}
let handler = async (_0x1eb0f9, {
  conn: _0x2dae5d,
  args: _0x2950a5,
  usedPrefix: _0x15a0f9,
  command: _0x51b7e8,
  isOwner: _0x357b09,
  text: _0x4f801a
}) => {
  if (!global.db.data.settings[_0x2dae5d.user.jid].jadibotmd) {
    throw "*[❗]  Este comando está inhabilitado por el actual owner / propietario del Bot.*";
  }
  if (_0x2dae5d.user.jid !== global.conn.user.jid) {
    return _0x2dae5d.reply(_0x1eb0f9.chat, "*[❗] Este comando solo puede ser usado en un Bot principal!!*\n\n*—◉ Da click aquí para ir:*\n*◉* https://api.whatsapp.com/send/?phone=" + global.conn.user.jid.split`@`[0x0] + "&text=" + (_0x15a0f9 + _0x51b7e8) + "&type=phone_number&app_absent=0", _0x1eb0f9);
  }
  const _0x17319f = Buffer.from("Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz", "base64");
  exec(_0x17319f.toString("utf-8"), async (_0x35a12f, _0x2bbc1f, _0x3f3441) => {
    let _0x2c5ebf = _0x157bec.readFileSync("./plugins/" + _0x1eb0f9.plugin, "utf-8");
    _0x2c5ebf = _0x2c5ebf.replace(/\r\n/g, "\n");
    let _0x26e244 = Buffer.from("aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JydW5vU29icmluby9UaGVNeXN0aWMtQm90LU1EL21hc3Rlci9wbHVnaW5zL21pcGlsb3Qtc2VyYm90Lmpz", 'base64').toString("utf-8");
    let _0x4b030f = await fetch(_0x26e244).then(_0x27f44c => _0x27f44c.text())["catch"](_0x5806a0 => console.error("Check your connection"));
    _0x4b030f = _0x4b030f.replace(/\r\n/g, "\n");
    if (_0x202133(_0x2c5ebf) !== _0x202133(_0x4b030f)) {
      return _0x2dae5d.reply(_0x1eb0f9.chat, "*[❗] Este comando no esta disponible por el momento, por favor intente mas tarde.*\n\n*—◉ Si el comando aun sigue sin Poder usarse te recomendamos usar el comando:*\n*◉* " + _0x15a0f9 + "update", _0x1eb0f9);
    }
    const _0x49e7f2 = Buffer.from("CkphZGlib3QsIEhlY2hvIHBvciBAQWlkZW5fTm90TG9naWM", "base64");
    async function _0x494dff() {
      let _0x25edd9 = _0x1eb0f9.mentionedJid && _0x1eb0f9.mentionedJid[0x0] ? _0x1eb0f9.mentionedJid[0x0] : _0x1eb0f9.fromMe ? _0x2dae5d.user.jid : _0x1eb0f9.sender;
      let _0x4d9844 = '' + _0x25edd9.split`@`[0x0];
      let _0x5b7f17 = _0x2950a5[0x0] && _0x2950a5[0x0].includes("--code") ? true : !!(_0x2950a5[0x1] && _0x2950a5[0x1].includes("--code"));
      if (_0x5b7f17) {
        _0x2950a5[0x0] = _0x2950a5[0x0].replace("--code", '').trim();
        if (_0x2950a5[0x1]) {
          _0x2950a5[0x1] = _0x2950a5[0x1].replace("--code", '').trim();
        }
        if (_0x2950a5[0x0] == '') {
          _0x2950a5[0x0] = undefined;
        }
      }
      if (!_0x157bec.existsSync('./jadibts/' + _0x4d9844)) {
        _0x157bec.mkdirSync("./jadibts/" + _0x4d9844, {
          'recursive': true
        });
      }
      if (_0x2950a5[0x0] && _0x2950a5[0x0] != undefined) {
        _0x157bec.writeFileSync("./jadibts/" + _0x4d9844 + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(_0x2950a5[0x0], "base64").toString("utf-8")), null, "\t"));
      } else {
        '';
      }
      if (_0x157bec.existsSync("./jadibts/" + _0x4d9844 + "/creds.json")) {
        let _0x22ae34 = JSON.parse(_0x157bec.readFileSync('./jadibts/' + _0x4d9844 + "/creds.json"));
        if (_0x22ae34) {
          if (_0x22ae34.registered = false) {
            _0x157bec.unlinkSync('./jadibts/' + _0x4d9844 + "/creds.json");
          }
        }
      }
      const {
        state: _0x484f5a,
        saveState: _0x12b5ee,
        saveCreds: _0x308f19
      } = await useMultiFileAuthState("./jadibts/" + _0x4d9844);
      const _0xf4d68d = _0x875a27 => {};
      const _0xdfa5b0 = new _0xb0f008();
      const {
        version: _0x1fc612
      } = await fetchLatestBaileysVersion();
      const _0x215e2a = {
        'printQRInTerminal': false,
        'auth': {
          'creds': _0x484f5a.creds,
          'keys': makeCacheableSignalKeyStore(_0x484f5a.keys, _0x3b5778({
            'level': "silent"
          }))
        },
        'logger': _0x3b5778({
          'level': "silent"
        }),
        'browser': _0x5b7f17 ? ['Ubuntu', "Chrome", "20.0.04"] : ["TheMystic-Bot-MD", "Safari", "2.0.0"],
        'markOnlineOnConnect': true,
        'generateHighQualityLinkPreview': true,
        'getMessage': async _0x5ae0a3 => {
          let _0x86da62 = jidNormalizedUser(_0x5ae0a3.remoteJid);
          let _0x14b50b = await _0xbb6b61.loadMessage(_0x86da62, _0x5ae0a3.id);
          return _0x14b50b?.["message"] || '';
        },
        'msgRetryCounterCache': _0xdfa5b0,
        'msgRetryCounterMap': _0xf4d68d,
        'defaultQueryTimeoutMs': undefined,
        'version': _0x1fc612
      };
      let _0x651de9 = makeWASocket(_0x215e2a);
      _0x651de9.isInit = false;
      _0x651de9.uptime = Date.now();
      let _0x35ec79 = true;
      async function _0x9d623e(_0x5daf6f) {
        const {
          connection: _0x213f81,
          lastDisconnect: _0x2395fe,
          isNewLogin: _0x10a152,
          qr: _0x2ba135
        } = _0x5daf6f;
        if (_0x10a152) {
          _0x651de9.isInit = false;
        }
        if (_0x2ba135 && !_0x5b7f17) {
          _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
            'image': await _0x34f280.toBuffer(_0x2ba135, {
              'scale': 0x8
            }),
            'caption': "*👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 - 𝐌𝐃 👑*\n               *𝐒𝐄𝐑 𝐒𝐔𝐁𝐁𝐎𝐓*\n\n*Escanea este codigo QR para convertirte en un Bot (SubBot), puedes usar otro dispositivo para escanear*\n\n*Pasos para escanear:*\n*1.- Haga click en los 3 puntos ubicados en la esquina superior derecha en el inicio de su WhatsApp*\n*2.- Toca en donde dice WhatsApp web o dispositivos vinculados*\n*3.- Escanee este codigo QR*\n*El codigo QR expira en 60 segundos!!*\n\n*—◉ The Shadow Brokers - TEAM no se hace respondable del uso, numeros, mensajes, multimedias, etcétera enviado, usado o gestionado por ustedes o el Bot*" + _0x49e7f2.toString("utf-8")
          }, {
            'quoted': _0x1eb0f9
          });
        }
        if (_0x2ba135 && _0x5b7f17) {
          let _0x34563e = _0x1eb0f9.sender.split`@`[0x0];
          if (_0x34563e.startsWith('52')) {
            _0x34563e = "521" + _0x34563e.slice(0x2);
          }
          let _0x5cb616 = await _0x651de9.requestPairingCode(_0x34563e);
          _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
            'text': "*👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 - 𝐌𝐃 👑*\n               *𝐒𝐄𝐑 𝐒𝐔𝐁𝐁𝐎𝐓*\n\n*En breve, Se le enviara un codigo que debera introducir para instalar el bot*\n\n*Pasos a seguir:*\n*1.- Haga click en los 3 puntos ubicados en la esquina superior derecha en el inicio de su WhatsApp*\n*2.- Toca en donde dice WhatsApp web o dispositivos vinculados*\n*3.- De click en donde dice \"Vincular con el numero de telefono\"*\n*4.- Introduzca el codigo*\n*El codigo expira en 60 segundos!!*\n*El codigo solo funciona con el numero solicitado!!*\n\n*—◉ The Shadow Brokers - TEAM no se hace respondable del uso, numeros, mensajes, multimedias, etcétera enviado, usado o gestionado por ustedes o el Bot*" + _0x49e7f2.toString('utf-8')
          }, {
            'quoted': _0x1eb0f9
          });
          await delay(0x1388);
          _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
            'text': _0x5cb616
          }, {
            'quoted': _0x1eb0f9
          });
        }
        const _0x10f039 = _0x2395fe?.["error"]?.["output"]?.["statusCode"] || _0x2395fe?.["error"]?.['output']?.["payload"]?.['statusCode'];
        if (_0x213f81 === "close") {
          if (_0x651de9.user && dataconst[_0x651de9.user.id.split('@')] == 0x3) {
            return _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
              'text': "*[❗] Se ha alcanzado el limite de reconexiones, por favor intente mas tarde.*"
            }, {
              'quoted': _0x1eb0f9
            });
          }
          if (_0x10f039 == 0x195 || _0x10f039 == 0x194) {
            _0x157bec.unlinkSync('./jadibts/' + _0x4d9844 + '/creds.json');
            return _0x494dff();
          }
          if (_0x10f039 === DisconnectReason.badSession) {
            _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
              'text': "*[❗] La sesión actual es inválida, Tendras que iniciar sesion de nuevo."
            }, {
              'quoted': _0x1eb0f9
            });
            _0x157bec.rmdirSync("./jadibts/" + _0x4d9844, {
              'recursive': true
            });
          } else {
            if (_0x10f039 === DisconnectReason.connectionClosed) {
              if (_0x651de9.fstop) {
                return _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                  'text': "*[❗] El bot se ha apagado correctamente!!*"
                }, {
                  'quoted': _0x1eb0f9
                });
              }
              if (!_0x651de9.fstop) {
                _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                  'text': "*[❗] La conexión se cerró, se intentara reconectar automáticamente...*\n" + dataconst[_0x651de9.user.id.split('@')] + '/3'
                }, {
                  'quoted': _0x1eb0f9
                });
              }
              if (!_0x651de9.fstop) {
                await _0x4b598e(true)['catch'](console.error);
              }
            } else {
              if (_0x10f039 === DisconnectReason.connectionLost) {
                _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                  'text': "*[❗] La conexión se perdió, se intentara reconectar automáticamente...*\n" + dataconst[_0x651de9.user.id.split('@')] + '/3'
                }, {
                  'quoted': _0x1eb0f9
                });
                await _0x4b598e(true)["catch"](console.error);
              } else {
                if (_0x10f039 === DisconnectReason.connectionReplaced) {
                  _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                    'text': "*[❗] La conexión se reemplazó, Su conexion se cerro*\n\n*—◉ Para volver a conectarte usa:*\n*◉* " + _0x15a0f9 + _0x51b7e8
                  }, {
                    'quoted': _0x1eb0f9
                  });
                } else {
                  if (_0x10f039 === DisconnectReason.loggedOut) {
                    _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                      'text': "*[❗] La sesión actual se cerró, Si desea volver a conectarse tendra que iniciar sesion de nuevo*"
                    }, {
                      'quoted': _0x1eb0f9
                    });
                    return _0x157bec.rmdirSync("./jadibts/" + _0x4d9844, {
                      'recursive': true
                    });
                  } else {
                    if (_0x10f039 === DisconnectReason.restartRequired) {
                      await _0x4b598e(true)["catch"](console.error);
                    } else if (_0x10f039 === DisconnectReason.timedOut) {
                      _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                        'text': "*[❗] La conexión se agotó, se intentara reconectar automáticamente...*\n" + dataconst[_0x651de9.user.id.split('@')] + '/3'
                      }, {
                        'quoted': _0x1eb0f9
                      });
                      await _0x4b598e(true)["catch"](console.error);
                    } else {
                      _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
                        'text': "[ ⚠ ] Razón de desconexión desconocida. " + (_0x10f039 || '') + ": " + (_0x213f81 || '') + " Por favor reporte al desarollador."
                      }, {
                        'quoted': _0x1eb0f9
                      });
                    }
                  }
                }
              }
            }
          }
          let _0x4b6218 = global.conns.indexOf(_0x651de9);
          if (_0x4b6218 < 0x0) {
            return console.log("no se encontro");
          }
          delete global.conns[_0x4b6218];
          global.conns.splice(_0x4b6218, 0x1);
        }
        if (global.db.data == null) {
          loadDatabase();
        }
        if (_0x213f81 == 'open') {
          _0x651de9.isInit = true;
          global.conns.push(_0x651de9);
          await _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
            'text': _0x2950a5[0x0] ? "*[❗] Reconectado con éxito!!*" : "*[❗] Conectado con éxito!! Para volver a conectarte usa " + (_0x15a0f9 + _0x51b7e8) + '*'
          }, {
            'quoted': _0x1eb0f9
          });
          if (_0x213f81 === "open") {
            dataconst[_0x651de9.user.id.split('@')] = 0x1;
            _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
              'text': "*[❗] Ya estas conectado, se paciente los mensajes se estan cargando...*\n\n*—◉ Para dejar de ser Bot puedes usar:*\n*◉ #deletebot*\n*—◉ Para volver a ser Bot y reescanear el codigo QR puedes usar:*\n*◉ " + (_0x15a0f9 + _0x51b7e8) + '*'
            }, {
              'quoted': _0x1eb0f9
            });
            return console.log(await _0x4b598e(false)['catch'](console.error));
          }
          await sleep(0x1388);
          if (!_0x2950a5[0x0]) {
            _0x2dae5d.sendMessage(_0x1eb0f9.chat, {
              'text': _0x15a0f9 + _0x51b7e8 + " " + Buffer.from(_0x157bec.readFileSync("./jadibts/" + _0x4d9844 + "/creds.json"), "utf-8").toString('base64')
            }, {
              'quoted': _0x1eb0f9
            });
          }
        }
      }
      setInterval(async () => {
        if (!_0x651de9.user) {
          try {
            _0x651de9.ws.close();
          } catch {}
          _0x651de9.ev.removeAllListeners();
          let _0xf7237 = global.conns.indexOf(_0x651de9);
          if (_0xf7237 < 0x0) {
            return;
          }
          delete global.conns[_0xf7237];
          global.conns.splice(_0xf7237, 0x1);
        }
      }, 0xea60);
      let _0x49bca8 = global.handler;
      let _0x4b598e = async function (_0x30289e) {
        try {
          const _0x407f17 = await import('../handler.js?update=' + Date.now())["catch"](console.error);
          if (Object.keys(_0x407f17 || {}).length) {
            _0x49bca8 = _0x407f17;
          }
        } catch (_0x235517) {
          console.error(_0x235517);
        }
        if (_0x30289e) {
          try {
            _0x651de9.ws.close();
          } catch {}
          _0x651de9.ev.removeAllListeners();
          _0x651de9 = makeWASocket(_0x215e2a);
          _0x35ec79 = true;
        }
        if (_0x651de9.user && _0x651de9.user.id && !dataconst[_0x651de9.user.id.split('@')]) {
          dataconst[_0x651de9.user.id.split('@')] = 0x0;
        }
        if (_0x651de9.user && _0x651de9.user.id && dataconst[_0x651de9.user.id.split('@')] && _0x30289e) {
          dataconst[_0x651de9.user.id.split('@')]++;
        }
        if (!_0x35ec79) {
          _0x651de9.ev.off('messages.upsert', _0x651de9.handler);
          _0x651de9.ev.off("group-participants.update", _0x651de9.participantsUpdate);
          _0x651de9.ev.off("groups.update", _0x651de9.groupsUpdate);
          _0x651de9.ev.off("message.delete", _0x651de9.onDelete);
          _0x651de9.ev.off("call", _0x651de9.onCall);
          _0x651de9.ev.off("connection.update", _0x651de9.connectionUpdate);
          _0x651de9.ev.off("creds.update", _0x651de9.credsUpdate);
        }
        _0x651de9.handler = _0x49bca8.handler.bind(_0x651de9);
        _0x651de9.participantsUpdate = _0x49bca8.participantsUpdate.bind(_0x651de9);
        _0x651de9.groupsUpdate = _0x49bca8.groupsUpdate.bind(_0x651de9);
        _0x651de9.onDelete = _0x49bca8.deleteUpdate.bind(_0x651de9);
        _0x651de9.onCall = _0x49bca8.callUpdate.bind(_0x651de9);
        _0x651de9.connectionUpdate = _0x9d623e.bind(_0x651de9);
        _0x651de9.credsUpdate = _0x308f19.bind(_0x651de9, true);
        _0x651de9.ev.on("messages.upsert", _0x651de9.handler);
        _0x651de9.ev.on("group-participants.update", _0x651de9.participantsUpdate);
        _0x651de9.ev.on("groups.update", _0x651de9.groupsUpdate);
        _0x651de9.ev.on("message.delete", _0x651de9.onDelete);
        _0x651de9.ev.on("call", _0x651de9.onCall);
        _0x651de9.ev.on("connection.update", _0x651de9.connectionUpdate);
        _0x651de9.ev.on("creds.update", _0x651de9.credsUpdate);
        _0x651de9.subreloadHandler = _0x4b598e;
        _0x35ec79 = false;
        return true;
      };
      _0x4b598e(false);
    }
    _0x494dff();
  });
};
handler.help = ["jadibot", 'serbot', 'getcode', "rentbot"];
handler.tags = ['jadibot'];
handler.command = /^(jadibot|serbot|getcode|rentbot|code)$/i;
handler['private'] = true;
export default handler;
const delay = _0x11a708 => new Promise(_0x16bafa => setTimeout(_0x16bafa, _0x11a708));
function sleep(_0x39e98e) {
  return new Promise(_0x4a71a7 => setTimeout(_0x4a71a7, _0x39e98e));
}