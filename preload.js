/*
 * File: preload.js
 * Created Date: Thursday February 27th 2025 01:33:30
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 04:44:12
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */


const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    haeLinkit: () => ipcRenderer.invoke('hae-linkit'),
    avaaPolku: (polku) => ipcRenderer.send('avaa-polku', polku)
});

