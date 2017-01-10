import express from "express";
import consign from "consign";
const PORT = 3000;

const app = express();

app.set("json spaces", 4);
app.set("port", 3000);

consign()
  .include("models");
  .then("routes");
  .into(app);

app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));
