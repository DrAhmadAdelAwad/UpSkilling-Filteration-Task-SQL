import express from 'express'
import bootstrap from './Src/index.router.js'
const app = express()
const port = 5000

// 
bootstrap(app,express)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))