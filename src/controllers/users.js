import {getLogin} from "../modules/users.js"

export const login = async(req, res) => {
    let table = req.query.table
    let pass = req.body.pass
    let user = req.body.user
    console.log(table)
    let login = await getLogin({table, values:[user, pass]})
    console.log(login)
    if(login.length != 1) {
        res.status(404).send({error: "error", msn:"no data"})
        return 0
    }
    res.send({msn:"login", data: login})
}

export const setUser = () => {
    console.log("set user")
    res.send({msn:"set"})
}

export const updateUser = () => {
    console.log("user active/deactive")
    res.send({msn:"status user"})
}