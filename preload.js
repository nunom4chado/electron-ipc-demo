const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
  counterValue: (value) => ipcRenderer.send('counter-value', value),
  btnClick: () =>  console.log('clicked the btn'),
})

contextBridge.exposeInMainWorld('openNewScreen', {
    openUrl: (url) => {
        ipcRenderer.send('openUrl', url);
    }
});