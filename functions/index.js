const express = require('express');
const serverless = require('serverless-http');
const app = express();
const yta = require('./yta.js')
const router = express.Router();

router.get('/', (req, res) => {

  res.json({
    message: 'Hello from Home Serverless!'
  })
  
})

router.get('/yta/:id', async (req, res) => {
const q = req.query.data
 try{
const respon = await yta(q)
  res.send(respon)
}catch(e){
    res.end()
}
  
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
