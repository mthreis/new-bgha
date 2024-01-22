import app from "./app.js";
import postgres from "./postgres.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening onx port ${ port }...`);
});