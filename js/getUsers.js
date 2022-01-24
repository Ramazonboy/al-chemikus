import { getUsers ,isSignIn} from "./firebase.js";
const users =[]
const textName=''
isSignIn((res) => {
    if (!res)
console.log(res);
    else {
console.log(res);

    
const usersAll=(data)=>{
    Object.entries(data).map((item)=>{
        console.log(item);
if(item[1].uid===res)
        users.push({
           uid : item[1].uid,
           username:item[1].username
        }
    )
    })
}

getUsers(usersAll)


    }

})
export{
    users,
}