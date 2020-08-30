import {Application} from "./application";
import {projectRouter} from "./routing/projectRoute";

const app: Application = new Application();
app.use('/resources/project', projectRouter);

app.run();