const express = require('express');
const serverless = require('serverless-http');
const app = express();
const ai = require('./ai.js')
const router = express.Router();

router.get('/', (req, res) => {

  res.json({
    message: 'Hello from Home Serverless!'
  })
  
})

router.get('/ai/:id', async (req, res) => {
const q = req.query.data
 try{
const respon = await ai(q)
  res.send(respon)
}catch(e){
    res.end()
}
  
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)
