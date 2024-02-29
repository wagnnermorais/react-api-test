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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
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

