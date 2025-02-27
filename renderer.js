/*
 * File: render.js
 * Created Date: Thursday February 27th 2025 01:33:02
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Thursday February 27th 2025 04:45:43
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */


document.addEventListener('DOMContentLoaded', async () => {
    const napitContainer = document.getElementById('napit-container');

    // Hae linkit.json tiedot
    const linkit = await window.electronAPI.haeLinkit();

    // Luo napit
    linkit.forEach(linkki => {
        const button = document.createElement('button');
        button.textContent = linkki.nimi;
        button.addEventListener('click', () => {
            console.log(`Avataan: ${linkki.polku}`);
            window.electronAPI.avaaPolku(linkki.polku);
        });
        napitContainer.appendChild(button);
    });
});
