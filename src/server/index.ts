import {Application} from "./application";
import {projectRouter} from "./routing/projectRoute";
import {responseRouter} from "./routing/responseRoute";
import {apiRouter} from "./routing/apiRoute";
import {stabRouter} from "./routing/stabRoute";

const app: Application = new Application();
app.use('/resources/project', projectRouter);
app.use('/resources/api', apiRouter);
app.use('/resources/response', responseRouter);
app.use('/stab', stabRouter);

app.run();