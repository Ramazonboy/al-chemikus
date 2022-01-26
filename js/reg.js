import { createNewUser, getJadval, signIn } from "./firebase.js";
import { body, createElement } from "./function.js";
import { jadvalYarat } from "./game.js";
import { index } from "./index.js";

const signUp = () => {
    body.innerHTML = "";
    const main = createElement("main", "", "main", body);

    const container = createElement("div", "", "container-fluid", main);

    const row = createElement("div", "", "row", container);

    const col5 = createElement(
        "div",
        "",
        "col-md-5 changing d-flex flex-column align-items-center justify-content-center order-1",
        row
    );

    const welcomeText = createElement(
        "h1",
        "Welcome Back!",
        "text-white fs-1 my-5",
        col5
    );

    const inText = createElement(
        "p",
        "To keep connected with us please login with your personal info.",
        "text-white fs-5 my-4",
        col5
    );
    const btn = createElement(
        "button",
        "Sign in",
        "text-white px-5 py-2 my-5 signIn",
        col5
    );

    const col7 = createElement(
        "div",
        "",
        "col-md-7 d-flex flex-column align-items-center justify-content-center order-2",
        row
    );

    const incol7Text = createElement(
        "h1",
        "Create account",
        "fs-1 my-4 head_word",
        col7
    );

    const divForicons = createElement("div", "", "d-flex gap-2", col7);

    const first_icon = createElement(
        "i",
        "",
        "fab fa-facebook fs-4",
        divForicons
    );

    const second_icon = createElement(
        "i",
        "",
        "fab fa-google-plus-g fs-4",
        divForicons
    );

    const third_icon = createElement(
        "i",
        "",
        "fab fa-invision fs-4",
        divForicons
    );

    const bottomWord = createElement(
        "p",
        "or use your email account for regstration",
        "text-secondary my-3 fs-6",
        col7
    );

    const form = createElement("form", ``, "w-50", col7);

    const nameInput = createElement("input", ``, "form-control  my-3", form);
    nameInput.placeholder = "Name";
    nameInput.style.fontSize = "20px";
    nameInput.type = "text";
    nameInput.required=true
    
    

    const emailInput = createElement("input", "", "form-control mt-3", form);
    emailInput.placeholder = "Email";
    emailInput.style.fontSize = "20px";
    emailInput.type = "email";
    
    const spanBottom = createElement(
        "span",
        "We'll never share your email with anyone else.",
        "form-text mb-3 ms-2",
        form
    );

    const passwordInputSign = createElement("input", "", "form-control my-3", form);
    passwordInputSign.placeholder = "Password";
    passwordInputSign.type = "password";
    passwordInputSign.style.fontSize = "20px";

    btn.addEventListener("click", (e) => {
        logIn();
    });

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

    const container = createElement("div", "", "container-fluid", main);

    const row = createElement("div", "", "row", container);

    const col7 = createElement(
        "div",
        "",
        "col-md-7 d-flex flex-column align-items-center justify-content-center",
        row
    );

    const incol7Text = createElement(
        "h1",
        "Sign to Al-chemikus",
        "fs-1 my-4 head_word",
        col7
    );

    const divForicons = createElement("div", "", "d-flex gap-2", col7);

    const first_icon = createElement(
        "i",
        "",
        "fab fa-facebook fs-4",
        divForicons
    );

    const second_icon = createElement(
        "i",
        "",
        "fab fa-google-plus-g fs-4",
        divForicons
    );

    const third_icon = createElement(
        "i",
        "",
        "fab fa-invision fs-4",
        divForicons
    );

    const bottomWord = createElement(
        "p",
        "or use your email account for regstration",
        "text-secondary my-3 fs-6",
        col7
    );

    const form = createElement("form", ``, "w-50", col7);

    const emailInputSign = createElement("input", "", "form-control mt-3", form);
    emailInputSign.placeholder = "Email";
    emailInputSign.style.fontSize = "20px";
    emailInputSign.type = "email";

    const spanBottom = createElement(
        "span",
        "We'll never share your email with anyone else.",
        "form-text mb-3 ms-2",
        form
    );

    const passwordInputSign = createElement("input", "", "form-control my-3", form);
    passwordInputSign.placeholder = "Password";
    passwordInputSign.type = "password";
    passwordInputSign.style.fontSize = "20px";

    const col5 = createElement(
        "div",
        "",
        "col-md-5 changing d-flex flex-column align-items-center justify-content-center",
        row
    );

    const welcomeText = createElement(
        "h1",
        "Welcome Back!",
        "text-white fs-1 my-5",
        col5
    );

    const inText = createElement(
        "p",
        "To keep connected with us please login with your personal info.",
        "text-white fs-5 my-4",
        col5
    );

    const btn = createElement(
        "button",
        "Sign up",
        "text-white px-5 py-2 my-5 signIn",
        col5
    );
    const headerRender = () => {
        body.innerHTML = "";
        const header = createElement("header", "", "bg-dark", body);
        const containerHeader = createElement("div", "", "my-2 container", header);
        const rowHeader = createElement(
            "div",
            "",
            "d-flex align-items-center flex-wrap justify-content-between",
            containerHeader
        );
        const colSixLeft = createElement("div", "", "", rowHeader);
        const imgColSixLeft = createElement("img", " ", "", colSixLeft);
        imgColSixLeft.src = "";
        //  const colThreeRight = createElement("div", "col-3 my-3", "", rowHeader);
        const ulHeader = createElement(
            "ul",
            "",
            "d-flex align-items-center gap-2 justify-content-between m-0",
            rowHeader
        );
        const liHome = createElement("li", "Home", "text-warning", ulHeader);
        const liAboutUs = createElement("li", "About us", "text-warning", ulHeader);
        const buttonSignIn = createElement(
            "button",
            "Sign in",
            "btn btn-primary",
            ulHeader
        );
    };
    //sign inni ishlatish uchun function
    btn.addEventListener("click", (e) => {
        // alert("signupga otdi");
        signUp();
    });

    const buttonSubmit = createElement(
        "button",
        "Sign in",
        "btn btn-primary",
        form
    );

    console.log("keyin");

    buttonSubmit.type = "submit";
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault()


        e.stopPropagation()

        console.log("keyin");
        signIn(emailInputSign.value, passwordInputSign.value, index()

        )
    })
}
export { signUp, logIn }