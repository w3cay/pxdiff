import { app, BrowserWindow, ipcMain } from "electron";
const electronLocalshortcut = require("electron-localshortcut");
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let mainWindow;
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    useContentSize: true,
    transparent: true,
    minWidth: 100,
    width: 375,
    height: 600,
    backgroundColor: "#00FFFFFF",
    webPreferences: {
      webSecurity: false,
    },
  });

  mainWindow.loadURL(winURL);
  mainWindow.setBackgroundColor("#00FFFFFF");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  electronLocalshortcut.register(mainWindow, "Down", () => {
    mainWindow.webContents.send('keyda', 'Down')
  });

  electronLocalshortcut.register(mainWindow, "Up", () => {
    mainWindow.webContents.send('keyda', 'Up')
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.commandLine.appendSwitch("enable-transparent-visuals");

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})


app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
