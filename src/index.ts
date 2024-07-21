import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/hello", (req, res) => res.json({ text: "Hello" }));

app.listen(8080, () => console.log("Server ready on port 8080."));

export default app;
