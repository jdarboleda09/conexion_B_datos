const express = require('express')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/api/firts', (req, res) => {
    db.query('SELECT * FROM usuario LIMIT 1', (err, rows) => {
        if (err) {
            return res.sendStatus(500).json({ error: err.message })
        }

        if (rows.length === 0) {
            return res.json({ message: 'No hay registros' })
        }
        req.json(rows[0])
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Servidor activo en http://localhost:${PORT}')
})