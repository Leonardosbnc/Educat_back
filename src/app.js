const express = require('express')
const cors = require('cors')


const app = express()
const port = 3838

app.use(cors())
app.use(express.json())

require('./routes/route')(app)

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`)
})  