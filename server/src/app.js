import express from "express"
import dotenv from "dotenv"

dotenv.config();

const port = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
    
  res.send('Home')
  console.log(`the path is :${req.url}`)
})
app.get('/register', (req, res) => {
  res.send('this is register route')
  console.log(`the path is :${req.url}`)
})

app.listen(port, () => {
  console.log(`app is listening on port : http://localhost:${port}`)
})