import { BrowserWindow, app } from 'electron'
import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

// setup local server
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});
server.listen(10000, '0.0.0.0');

// setup electron window
app.on('ready', () => {
  let window: BrowserWindow | null  = new BrowserWindow({
    width: 800,
    height: 400,
    minWidth: 500,
    minHeight: 200,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  });

  // window.webContents.openDevTools();

  window.loadFile('index.html').catch((e) => {
    console.log(e);
  });

  window.on('closed', () => {
    window = null;
  });
});
