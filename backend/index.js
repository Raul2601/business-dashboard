const express = require('express')
const app = express()
const port = 8080

app.use(express.static('../frontend/dist/frontend'));

app.get('/', (req, res) => {
  res.redirect('/');
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/users', (req, res) => {
  res.status(200).json({people:[{name:"Adi", age:12},{name:"test", age:34}]});
});