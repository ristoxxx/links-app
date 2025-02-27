/*
 * File: main.js
 * Created Date: Thursday February 27th 2025 12:48:40
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 03:37:56
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('node:path')

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
ipcMain.on('open-documents', () => {
    const oneDrivePath = process.env.ONEDRIVE || process.env.ONE_DRIVE; // Varmistetaan, että muuttujiin päästään käsiksi
    if (oneDrivePath) {
        shell.openPath(`${oneDrivePath}\\Documents`);
    } else {
        console.error('OneDrive-polku ei löytynyt.');
    }
});
function openDocumentsFolder() {
    shell.openPath('C:\\Users');
}

app.whenReady().then(() => {
  createWindow()
})