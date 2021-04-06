const { Client } = require('pg')
class Database { 
  constructor(user,host,password,port, database = '') {
    let databaseDefault = 'postgres'
    console.log('La base de datos es: ', databaseDefault)
    this.client = new Client({
      user,host,database:databaseDefault,password,port
    })
    this.client.connect()
  }

  testConnection() {
    return this.client.query('select NOW()')
    .then(res => {
      console.log(res.rows)
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
  }

  getDatabases(){
    return this.client.query('SELECT datname FROM pg_database')
    .then(res => {
      return res.rows
    })
    .catch(err => {
      return err
    })
  }

  createDatabase(dbName){
    let query = `CREATE DATABASE ${dbName}`
    return this.client.query(query)
    .then(res => {
      console.log(res)
      return true
    })
    .catch(err => {
      console.log(err)
      return false
    })
  }
}


module.exports = Database