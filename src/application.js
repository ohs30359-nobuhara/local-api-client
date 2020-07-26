"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const fastify_1 = __importDefault(require("fastify"));
const server = fastify_1.default({});
server.listen(10000, '0.0.0.0');
electron_1.app.on('ready', () => {
    let window = new electron_1.BrowserWindow({
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
    window.loadFile('index.html').catch((e) => {
        console.log(e);
    });
    window.on('closed', () => {
        window = null;
    });
});
