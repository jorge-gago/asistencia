
import {connection}  from "./database.js"
import {setToTable, setAllows} from "./allForConfigs.js"




export const connectionDb = async () => {
    let db = await connection({})
    return db
}



const generateConfigs = async ({}) =>{
    console.log("geting info & generate config files")
    let db = await connectionDb()
    // await setAllows({name: "test_allows", fileUrl:"./src/configs", db})
    // await setToTable({name: "test_route", fileUrl:"./src/configs", db})

    process.exit(1)
}

generateConfigs({})