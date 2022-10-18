let express = require('express')

let app = express()

app.get('/', (req, res) => {
  res.send('welcome home page')
})

app.listen(3000, () => {
  console.log('port num 3000')
})
