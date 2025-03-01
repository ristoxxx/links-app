/*
 * File: main.js
 * Created Date: Thursday February 27th 2025 12:48:40
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 07:12:42
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const { app, BrowserWindow, shell, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

if (require('electron-squirrel-startup')) app.quit();



const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

ipcMain.handle('hae-linkit', async () => {
    const data = fs.readFileSync(path.join(__dirname, 'linkit.json'), 'utf-8');
    const linkit = JSON.parse(data);
    return linkit;
});

// Avaa polku

ipcMain.on('avaa-polku', (event, polku) => {
    const oikeaPolku = polku.replace(/%([A-Z_]+)%/g, (_, key) => process.env[key] || key);
    const [komento, ...args] = oikeaPolku.split(" "); // Erotetaan ohjelman nimi ja argumentit

    if (komento.includes("\\") || komento.includes("/")) {
        // Jos polku sisältää hakemiston, avaa se normaalisti
        shell.openPath(oikeaPolku);
    } else {
        // Jos ei ole polkua, suoritetaan ohjelma argumenteilla
        const command = process.platform === "win32" ? `start "" ${komento} ${args.join(" ")}` : `${komento} ${args.join(" ")}`;
        exec(command, (error) => {
            if (error) {
                console.error(`Virhe avattaessa ohjelmaa '${komento}':`, error);
            }
        });
    }
});

app.whenReady().then(() => {
  createWindow()
})