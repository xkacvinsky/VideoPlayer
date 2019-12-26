const sqlite3 = require('sqlite3').verbose()

let db

function conn () {
  if (!db || !db.open) {
    db = new sqlite3.Database('test2.db')
  }
  return db
}


export const initTable = () => {
  return new Promise((resolve) => {
    let db = conn()
    db.serialize(() => {
      db.run('CREATE TABLE if not exists Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(64), password varchar(64))')
      resolve()
    })
  })
}

export const queryAllTree = () => {
  return new Promise((resolve, reject) => {
    let db = conn()
    db.all('select id, name, fatherId from Users order by fatherId', (err, rows) => {
      if (err) reject(err)
      resolve(rows || [])
    })
  })
}

export const authetification = (name, password) => {
  return new Promise((resolve) => {
    let db = conn()
  
    db.get('SELECT name, password FROM Users WHERE name = ? AND password = ?', [name, password ] , (err,row) => {
      if(row){
      console.log(row.name)
      resolve(true)
    }
    })
  })
}
    
   // prepare.run(name, password)
   // prepare.get((err, rows) =>{    
    //  if (err){
    //  console.log('aha',err)
//reject(err)
   // }else{
   //  resolve(console.log(rows || []))
   //   closeDb()
  //  }
  //  })
 
/*export const insertProduct = (name,password) => {
  return new Promise((resolve) => {
    let db = conn()
    let prepare = db.prepare('insert into Users (name, password) values ( ?, ?)')
    prepare.run( name, password)
    prepare.finalize(err => {
      if (!err) resolve()
    })
  })
}*/

//function closeDb() {
//  console.log("closeDb");
//  db.close();
//}
