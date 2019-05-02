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

  public static get instance () {
    return this._instance || (this._instance = new this())
  }

  static executeQuery (query: string, cb: Function) {
    this.instance.cnn.query(query, (err, results: Object[], fields) => {
      if (err) {
        console.log(err)
        return cb('Tenemos algunos problemas.')
      }

      if (!results.length) {
        return cb('El registro solicitado no existe')
      }

      cb(null, results)
    })
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
