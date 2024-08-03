import bcrypt from "bcrypt"

export const hash = ({opt = false}) =>{
    return ( req, res, next)=>{
            try {
                let password = req.body.data.password || false
                console.log(password)
                if (opt && !password) {
                    next()
                    return 0
                }
                bcrypt.hash(password, 10, (err, hash)=>{
                    if(err){
                        return res.status(500).json({mensaje: "error user or password hash "})
                    }
                    console.log(hash)
                    req.query.password = hash
                    next()
                })
            } catch (err) {
                console.log(err)
                res.status(500).json({mensaje: "error user or password "})
                return 0
            }
        }
}