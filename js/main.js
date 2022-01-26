
import { isSignIn } from "./firebase.js";
import {  body, } from "./function.js";
import {index} from './index.js'
import { signUp } from "./reg.js";

isSignIn((res )=>{

if (!res)
body.onload = signUp()
    else {
        body.onload = index(res)
    }

})
