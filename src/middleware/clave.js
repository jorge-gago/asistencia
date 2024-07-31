
import bcrypt from "bcrypt"

export const clave_hash = (req, res, next)=>{
    try {
        let password = req.body.fields.pass
        bcrypt.hash(datos.pass, 10, (err, hash)=>{
            if(err){
                return res.status(500).json({mensaje: "error user or password "})
            }
            req.query.pass = hash
            next()
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({mensaje: "error user or password "})
    }
}
