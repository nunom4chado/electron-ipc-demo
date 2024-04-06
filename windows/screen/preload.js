const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateUrl: (callback) => ipcRenderer.on('update-url', (_event, value) => callback(value)),
  // test: () => console.log('testing this'),
})