const { app, BrowserWindow, Menu } = require("electron");

// Set env
process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production" ? true : false;
const isMac = process.env.NODE_ENV === "darwin" ? true : false;

let mainWindow;
let aboutWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    title: "Image Shrink",
    width: 500,
    height: 600,
    icon: "./assets/icons/Icon_256x256.png",
    webPreferences: {
      contextIsolation: true,
    },
    resizable: isDev ? true : false,
    backgroundColor: "white",
  });
  mainWindow.loadFile(`./app/index.html`);
};

const createAboutWindow = () => {
  aboutWindow = new BrowserWindow({
    title: "About Image Shrink",
    width: 300,
    height: 300,
    icon: "./assets/icons/Icon_256x256.png",
    webPreferences: {
      contextIsolation: true,
    },
    resizable: false,
    backgroundColor: "white",
  });
  aboutWindow.loadFile(`./app/about.html`);
};

app.on("ready", () => {
  createMainWindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.on("ready", () => (mainWindow = null));
});

const menu = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  { role: "fileMenu" },
  ...(!isMac
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  ...(isDev
    ? [
        {
          label: "Developer",
          submenu: [
            { role: "reload" },
            { role: "forcereload" },
            { type: "separator" },
            { role: "toggledevtools" },
          ],
        },
      ]
    : []),
];

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
