import Server from './server'
import router from './router'

const server = Server.init(3000)
server.app.use(router)

server.start(() => {
  console.log('server running in port 300')
})
