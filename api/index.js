import Fastify from 'fastify'

export default async function handler(req, res) {
  const fastify = Fastify()

  // In-memory ma'lumotlar (dev uchun)
  const users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Vali' },
  ]

  // Route: GET /api/users
  fastify.get('/api/users', async (request, reply) => {
    return users
  })

  // Route: GET /api/users/:id
  fastify.get('/api/users/:id', async (request, reply) => {
    const id = Number(request.params.id)
    const user = users.find(u => u.id === id)
    return user || { message: 'Not found' }
  })

  // Requestni Fastify'ga uzatish
  await fastify.ready()
  fastify.server.emit('request', req, res)
}
