// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3005
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    res.redirect("/home")
  })

  server.get('/second/:id', (req, res, next) => {
    const actualPage = '/second'
    const queryParams = { id: req.params.id } 
    // app.render(req, res, actualPage, queryParams)
    next()
  })

  server.get('*', (req, res) => {
    
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err;
    console.log(`>>> Ready on http://localhost:${port}`)
  })

})
.catch(err => {
  console.error(err.stack)
  process.exit()
})