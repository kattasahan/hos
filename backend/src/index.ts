import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

process.on("uncaughtException", (e, o) => {
  console.log("App is running");
  console.log(
    `--------------------------ERROR--------------------------` +
      JSON.stringify({ error: e, origin: o })
  );
});

app.use(cors());
app.use(express.json());
// app.use("/todo", todos);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route never Existed in COSMOS" });
});

app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});
