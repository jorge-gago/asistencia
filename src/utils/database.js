import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()

let connection

try{  
    connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            namedPlaceholders: true
        })
        console.log(`conectado a la base de datos SQL ${process.env.DB_NAME}`)
}catch(err){
    connection = 'null'
    console.log("error en la conexion con la base de datos ", err)
} 


export {connection}