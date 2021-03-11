import { json } from "body-parser";
import { Commands } from "./commands/commands";

import express from "express";
import helmet from "helmet";

const app = express();

app.use(json());
app.use(helmet());

new Commands(app);

app.listen(3252);
