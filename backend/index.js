const express = require("express")
const cors = require("cors")
require("dotenv").config()

const db = require("./database")
const tsp = require("./algorithm")

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  return res.status(200).json("Olá, seja bem-vindo(a) ao servidor Node.js! ✔")
})

app.get("/clients/:id", async (req, res) => {
  const { id } = req.params
  const client = await db.selectClient(id)
  return res.status(200).json(client)
})

app.get("/clients", async (req, res) => {
  const clients = await db.selectClients()
  return res.status(200).json(clients)
})

app.post("/clients", async (req, res) => {
  const client = req.body
  const data = await db.insertClient(client)
  return res.status(201).json(data)
})

app.patch("/clients/:id", async (req, res) => {
  const data = req.body
  const { id } = req.params
  await db.updateClient(id, data)
  return res.sendStatus(200)
})

app.delete("/clients/:id", async (req, res) => {
  const { id } = req.params
  const data = await db.deleteClient(id)
  return res.status(200).json(data)
})

app.post("/route", async (req, res) => {
  try {
    const { clients } = req.body
    const data = tsp.calculateNearestNeighbor(clients)
    res.status(201).json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ err: "Erro ao calcular rota otimizada" })
  }
})

app.listen(port, () => {
  console.log(`🌐 Server is running on http://localhost:${port}`)
})