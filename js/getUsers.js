import { getUsers } from "./firebase.js";
const users =[]
const textName=''

const getUser=(id)=>{
    const user=getUsers()
    console.log(id);
}

export{getUser}