/*
 * File: main.js
 * Created Date: Thursday February 27th 2025 12:48:40
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 05:11:55
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

    
    if (oikeaPolku.startsWith("firefox")) {
        const command = process.platform === "win32" ? `start firefox ${oikeaPolku.replace("firefox ", "")}` : oikeaPolku;
        exec(command, (error) => {
            if (error) {
                console.error("Virhe avattaessa selainta:", error);
            }
        });
    } else {
        shell.openPath(oikeaPolku);
    }
    
});

app.whenReady().then(() => {
  createWindow()
})