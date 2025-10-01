import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;


app.use(cors())

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      joke: "first joke hahaha",
    },
    {
      id: 2,
      title: "second joke",
      joke: "second joke hahaha",
    },
    {
      id: 3,
      title: "third joke",
      joke: "third joke hahaha",
    },
    {
      id: 4,
      title: "forth joke",
      joke: "forth joke hahaha",
    },
    {
      id: 5,
      title: "fifth joke",
      joke: "fifth joke hahaha",
    },
  ];

  res.send(jokes);
});

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


