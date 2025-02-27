/*
 * File: main.js
 * Created Date: Thursday February 27th 2025 12:48:40
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 12:57:47
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

console.log('Hello World!');
const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})