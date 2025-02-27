/*
 * File: render.js
 * Created Date: Thursday February 27th 2025 01:33:02
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 02:04:38
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */


document.getElementById('open-documents').addEventListener('click', () => {
    console.log('open-documents');
    window.electronAPI.openDocumentsFolder();
});
