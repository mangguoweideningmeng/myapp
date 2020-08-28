const express = require('express')
const index = express()


index.get('/', (req, res) => res.send('Hello World!'))
index.get('/test', (req, res) => res.send('Hello TEST!'))
index.listen(3000, () => console.log('Example index listening on port 3000!'))
