"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
const projectRoute_1 = require("./routing/projectRoute");
const app = new application_1.Application();
app.use('/resources/project', projectRoute_1.projectRouter);
app.run();
