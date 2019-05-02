import mysql = require('mysql')
import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_USER
} from '../config'

export default class MySQL {
  private static _instance: MySQL

  cnn: mysql.Connection
  connected: boolean = false

  constructor () {
    console.log('initialized class')
    this.cnn = mysql.createConnection({
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE
    })

    this.connectDB()
  }

  private connectDB () {
    this.cnn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message)
        return
      }

      this.connected = true
      console.log('database online!')
    })
  }
}
