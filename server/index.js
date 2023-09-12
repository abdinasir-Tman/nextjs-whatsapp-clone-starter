import express from "express";
import cors from "cors";
import { port } from "./config/config.js";
const app = express();
app.use(express.json());
app.use(cors);

app.listen(port || 3005, () => {
  console.log(`Our Server is listening on ${port}`);
});
