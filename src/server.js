import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/usersRouter";
import videoRouter from "./routers/videosRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);
//req.body 없어.
app.use(express.urlencoded({ extended: true }));
//req.body 있어.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
export default app;
