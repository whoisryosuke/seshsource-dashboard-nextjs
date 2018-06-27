const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/events/manage', (req, res) => {
      return app.render(req, res, '/events/manage', { slug: req.params.slug })
    })

    server.get('/events/create', (req, res) => {
      return app.render(req, res, '/events/create', { slug: req.params.slug })
    })

    server.get('/events/:slug', (req, res) => {
      return app.render(req, res, '/events/profile', { slug: req.params.slug })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })