import { createNewUser, getJadval, signIn } from "./firebase.js";
import { body, createElement } from "./function.js";
import { jadvalYarat } from "./game.js";
import { index } from "./index.js";

const signUp = () => {
    body.innerHTML = "";
    const main = createElement("main", "", "main", body);
    const forma= createElement('div','','forma p-2  ',main)
    const col7 = createElement(
        "div",
        "",
        "",
        forma
    );
    const btns = createElement('div','','d-flex justify-content-evenly',col7)
    const login = createElement('button','Kirish','btn btn-light my-2', btns)
    const reg = createElement('button','Ro\'yhatdan o\'tish','btn btn-primary my-2', btns)
    login.addEventListener('click',()=>logIn())
    reg.addEventListener('click',()=>signUp())
    const incol7Text = createElement(
        "h1",
        "Akkount yaratish",
        "fs-1 my-4 text-center",
        col7
    );

    const form = createElement("form", ``, "w-75 text-center my-3", col7);

    const nameInput = createElement("input", ``, "form-control  my-3", form);
    nameInput.placeholder = "Name";
    nameInput.style.fontSize = "20px";
    nameInput.type = "text";
    nameInput.required=true
    
    const emailInput = createElement("input", "", "form-control mt-3", form);
    emailInput.placeholder = "Email";
    emailInput.style.fontSize = "20px";
    emailInput.type = "email";
    
   
    const passwordInputSign = createElement("input", "", "form-control my-3", form);
    passwordInputSign.placeholder = "Password";
    passwordInputSign.type = "password";
    passwordInputSign.style.fontSize = "20px";

   

    const buttonSubmit = createElement(
        "button",
        "Sign up",
        "btn btn-primary",
        form
    );
    buttonSubmit.type = "submit";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        createNewUser(
            nameInput.value,
            emailInput.value,
            passwordInputSign.value,
            index
        );
    });


};

function logIn() {
    body.innerHTML = "";

    const main = createElement("main", "", "main", body);

    const forma= createElement('div','','forma p-2  ',main)
    const col7 = createElement(
        "div",
        "",
        "",
        forma
    );
    const btns = createElement('div','','d-flex justify-content-evenly',col7)
    const login = createElement('button','Kirish','btn btn-primary my-2', btns)
    const reg = createElement('button','Ro\'yhatdan o\'tish','btn btn-light  my-2', btns)
    login.addEventListener('click',()=>logIn())
    reg.addEventListener('click',()=>signUp())
    const incol7Text = createElement(
        "h1",
        "Tizimga kirish",
        "fs-1 my-4 text-center",
        col7
    );
    
    const form = createElement("form", ``, "w-75 text-center my-3", col7);

    const emailInputSign = createElement("input", "", "form-control mt-3", form);
    emailInputSign.placeholder = "Email";
    emailInputSign.style.fontSize = "20px";
    emailInputSign.type = "email";

   

    const passwordInputSign = createElement("input", "", "form-control my-3", form);
    passwordInputSign.placeholder = "Password";
    passwordInputSign.type = "password";
    passwordInputSign.style.fontSize = "20px";

    const buttonSubmit = createElement(
        "button",
        "Sign in",
        "btn btn-primary",
        form
    );

    console.log("keyin");

    buttonSubmit.type = "submit";
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        e.stopPropagation()
        signIn(emailInputSign.value, passwordInputSign.value, index()

        )
    })
}
export { signUp, logIn }