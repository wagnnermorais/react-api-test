require("dotenv").config()

import express from "express"
import config from "config"
import router from "./router"
import database from "../config/database"
import Logger from "../config/logger"
import morganMiddleware from "./middleware/morganMiddleware"

const app = express()
const cors = require("cors")

// COURS
app.use(cors())
const allowedOrigins = ['https://react-api-test-xi.vercel.app', 'http://localhost:3000', 'http://localhost:5173/'];

app.use((req, res, next) => {
  const origin = req.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// JSON Middleware
app.use(express.json())

// Morgan Config
app.use(morganMiddleware)

// Routes
app.use("/api/", router)

// Porta da aplicação
const port = config.get<number>("port")
app.listen(port, async () => {
  await database()
  Logger.info(`Aplicação está funcionando na porta: ${port}`)
})

