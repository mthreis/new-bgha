import express from "express";
import hello from "./services/svc-hello.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(hello());
});

export default app;