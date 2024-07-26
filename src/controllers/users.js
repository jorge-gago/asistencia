import {getLogin, setUser, updateUser} from "../modules/users.js"

export const login = async(req, res) => {
    console.log("login")

    let table = req.query.table
    let pass = req.body.password
    let user = req.body.user
    let login = await getLogin({table, values:[user, pass]})
    // if(login.length != 1) {
    //     res.status(404).send({error: "error", msn:"no data"})
    //     return 0
    // }
    res.send({msn:"login", data: login})
}

export const createUser = async (req, res) => {
    console.log("set user")
    let table = req.query.table
    let pass = req.body.password
    let active =  req.body.active ?? true
    let user = await setUser({ table, active, password:pass})
    res.send({msn:"set", ok: user})
}

export const updateUsers = async (req, res) => {
    console.log("update user")
    let table = req.query.table
    let pass = req.body.password
    let id = 1 || req.query.id//<-------------------------------
    let active = req.body.active
    //console.log(table, id, pass, active)
    let change = await updateUser({ table, active, password:pass, id})
    res.send({msn:"update", ok: change})
}