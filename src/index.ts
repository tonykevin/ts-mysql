import Server from './server'
import router from './router'
import MySQl from './mysql'

const server = Server.init(3000)
server.app.use(router)

MySQl.instance

server.start(() => {
  console.log('server running in port 3000')
})
