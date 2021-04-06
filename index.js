const Database = require('./src/database')

let db = new Database('luisjose','localhost','luis123','5432', 'myapp_development')
db.testConnection().then(res => {
    console.log(res)
})
.catch(err => {console.log(err)})

db.createDatabase('dbPrueba2').then(res => {
    console.log(res)
})
.catch(err => {console.log(err)})

db.getDatabases('dbPrueba').then(res => {
    console.log(res)
})
.catch(err => {console.log(err)})

