import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()

const connection = async ({host = null, user = null, pass = null, db = null , named = true}) => {
    try{  
        let conn
        conn = await mysql.createConnection({
                host: host ?? process.env.DB_HOST,
                user: user ?? process.env.DB_USER,
                password: pass ?? process.env.DB_PASS,
                database: db ?? process.env.DB_NAME,
                namedPlaceholders: named
            })
            console.log(`conectado a la base de datos SQL ${process.env.DB_NAME}`)
            return conn 
    }catch(err){
        conn = 'null'
        console.log("error en la conexion con la base de datos ", err)
        return conn
    } 
}

export {connection}