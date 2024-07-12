Fue un placer crear este bot pero me despido ya no volveré a encender este bot ni a actualizar

 <p align="center">
  <a href="https://github.com/tu-usuario/tu-repositorio">
    <img src="http://readme-typing-svg.herokuapp.com?font=mono&size=17&duration=4000&color=FF0000&center=false&vCenter=false&lines=Liffy+Bot-MD+🚩;Gracias+por+visitar+este+repositorio.+%F0%9F%8C%B4" height="90px">
  </a>
</p>

![logo](https://telegra.ph/file/a7a9798496639ce074237.jpg)


# `Luffy Bot-MD 🚩`

Este repositorio contiene el código fuente del LuffyBot para WhatsApp. Sigue las instrucciones a continuación para instalar y configurar el bot.

## Requisitos previos

- Termux instalado en tu dispositivo Android.
- Conexión a Internet estable.

## Comandos de instalación

1. Configura el almacenamiento en Termux:
    ```bash
    termux-setup-storage
    ```

2. Actualiza e instala los paquetes necesarios:
    ```bash
    apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
    ```

3. Clona el repositorio de LuffyBot:
    ```bash
    git clone https://github.com/ofcDiego/LuffyBot-MD && cd LuffyBot-MD && yarn && npm install
   ```
4. desconprime los archivos
    ```bash
    unzip 'LuffyBot-MD.zip'
    ```
5. opcional pero recomendable:
    ```bash
    rm LuffyBot-MD.zip
    ```
6. inicia el bot:
    ```bash
    npm start
    ```
## Activar en caso de detenerse en Termux

Si después de instalar el bot y Termux se detiene (pantalla en blanco, pérdida de conexión a Internet, reinicio del dispositivo), sigue estos pasos:

1. Abre Termux y navega al directorio del bot:
    ```bash
    cd LuffyBot-MD
    ```

2. Inicia el bot nuevamente:
    ```bash
    npm start
    ```

## Obtener otro código QR en Termux

Para obtener un nuevo código QR, sigue estos pasos:

1. Detén el bot presionando `CTRL` + `Z` en tu teclado y luego presiona `Enter`.
2. Navega al directorio del bot y elimina la sesión anterior:
    ```bash
    cd ~
    cd LuffyBot-MD
    rm -rf LuffySession
    ```

3. Inicia el bot nuevamente:
    ```sh
    npm start
    ```
# quiero usar los comandos de creador que ago comando para lograr esto
```sh
sed -i 's/12345678/Agregate De Owner/g' confif.js
```
