const { app, BrowserWindow, Menu } = require('electron')
const electron = require('electron')
const globalShortcut = electron.globalShortcut
Menu.setApplicationMenu(false)

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()


  globalShortcut.register('f5', function() {
		console.log('f5 is pressed')
		win.reload()
	})
	globalShortcut.register('CommandOrControl+R', function() {
		console.log('CommandOrControl+R is pressed')
		win.reload()
	})
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
