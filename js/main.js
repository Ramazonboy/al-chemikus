//console.log("afdfd");
import {  getJadval } from "./firebase.js";
import {  body, } from "./function.js";
import { jadvalYarat } from "./game.js";
import { users } from "./getUsers.js";

console.log(users);
body.onload = getJadval(jadvalYarat)