import Server from './server'

const server = Server.init(3000)
server.start(() => {
  console.log('server running in port 300')
})
