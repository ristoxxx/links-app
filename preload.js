/*
 * File: preload.js
 * Created Date: Thursday February 27th 2025 01:33:30
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 02:30:12
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openDocumentsFolder: () => ipcRenderer.send('open-documents')
});

ipcRenderer.on('open-documents', () => {
    require('electron').shell.openPath('C:\\Users');
});
