import { BrowserWindow, app } from 'electron'
import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

// setup local server
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});
server.listen(10000, '0.0.0.0');

// setup electron window
app.on('ready', () => {
  let window: BrowserWindow | null  = new BrowserWindow({
    width: 1200,
    height: 600,
    minWidth: 800,
    minHeight: 400,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.webContents.openDevTools();
  window.loadFile('index.html').catch((e) => {
    console.log(e);
  });

  window.on('closed', () => {
    window = null;
  });
});
