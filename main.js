const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')


function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')

  // Open the DevTools.
//   mainWindow.webContents.openDevTools()
}


function createNewScreen (url) {
    const screen = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop: true,
    })
  
    // screen.loadFile('index.html')
    screen.loadURL(url)
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