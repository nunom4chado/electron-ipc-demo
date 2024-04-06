const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')


function createWindow () {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'windows/main/preload.js')
        }
    })

    mainWindow.loadFile('windows/main/index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}


function createNewScreen (url) {
    const screen = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, 'windows/screen/preload.js')
        }
    })
  
    screen.loadFile('windows/screen/index.html').then(() => screen.webContents.send('update-url', url))
    // screen.webContents.openDevTools()
}

app.whenReady().then(() => {

    createWindow();

    ipcMain.on('openUrl', (event, url) => createNewScreen(url))

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})