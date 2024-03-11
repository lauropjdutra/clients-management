const moment = require("moment")
const { Pool } = require("pg")

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
})

const connect = async () => {
  try {
    const client = await pool.connect()
    const res = await client.query("SELECT now()")
    const date = moment(res.rows[0].now).format("DD-MM-YYYY [at] HH:mm:ss")
    console.log(`✅ Database connected on ${date}`)
    client.release()
    return pool.connect()
  } catch (err) {
    console.error(`❌ Failed to connect to database: ${err.message}`)
    throw err
  }
}

const selectClients = async () => {
  const client = await connect()
  try {
    const res = await client.query("SELECT * FROM clients ORDER BY id")
    return res.rows
  } finally {
    client.release()
  }
}

const selectClient = async id => {
  const client = await connect()
  try {
    const res = await client.query(`SELECT * FROM clients WHERE id = ${id}`)
    return res.rows
  } finally {
    client.release()
  }
}

const insertClient = async u => {
  const client = await connect()
  try {
    const dml =
      "INSERT INTO clients (name, email, phone, x_coordinate, y_coordinate) VALUES ($1, $2, $3, $4, $5)"
    const values = [u.name, u.email, u.phone, u.x_coordinate, u.y_coordinate]
    await client.query(dml, values)
    const res = await client.query("SELECT * FROM clients ORDER BY id")
    return res.rows
  } finally {
    client.release()
  }
}

const updateClient = async (id, u) => {
  const client = await connect()
  try {
    const dml =
      "UPDATE clients SET name = $1,  email = $2, phone = $3, x_coordinate = $4, y_coordinate = $5 WHERE id = $6"
    const values = [
      u.name,
      u.email,
      u.phone,
      u.x_coordinate,
      u.y_coordinate,
      id,
    ]
    await client.query(dml, values)
  } finally {
    client.release()
  }
}

const deleteClient = async id => {
  const client = await connect()
  try {
    await client.query(`DELETE FROM clients WHERE id = ${id}`)
    const res = await client.query("SELECT * FROM clients ORDER BY id")
    return res.rows
  } finally {
    client.release()
  }
}

module.exports = {
  selectClients,
  selectClient,
  insertClient,
  updateClient,
  deleteClient,
}