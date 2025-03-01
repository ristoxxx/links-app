# Electron.js desktop app project

App is suppose to help to find files related to routine tasks

notes to myself:

```
mkdir my-electron-app && cd my-electron-app
yarn init
yarn add electron --dev
```

```
npm install --save-dev @electron-forge/cli
npm exec --package=@electron-forge/cli -c "electron-forge import"
npm i electron-squirrel-startup
npm install electron
npm run make
```

main.js must have: 
```
if (require('electron-squirrel-startup')) app.quit();
```
package.json must have:
- author
- description
