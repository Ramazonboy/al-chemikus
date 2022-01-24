import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
    set,
    remove,
    update,
    query,
    equalTo,
    orderByChild,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
    onAuthStateChanged,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAvWbxZw1JBHCGLgNL9CcmN7BqWLMhR16w",
    authDomain: "al-chemikus.firebaseapp.com",
    databaseURL: "https://al-chemikus-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "al-chemikus",
    storageBucket: "al-chemikus.appspot.com",
    messagingSenderId: "609519245638",
    appId: "1:609519245638:web:2cf945a5c97cdc8b972d47",
    measurementId: "G-EEN104EBC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

const createNewUser = (name, email, password, callback) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const uid = userCredential.user.uid;
            console.log("sing in", uid);

            writeUserData(uid, name, email, callback);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn(errorCode, errorMessage);
            alert("MUvvafaqiyatsiz");
        });
};


function writeUserData(userId, name, email, callback) {
    set(ref(db, 'users/' + userId), {
        uid: userId,
        username: name,
        email: email,
    }).then((res) => {
        console.log(res);
        getJadval(callback)

    }).catch((error) => {
        console.log(error);
        console.log('ishlamadi');
    });
}
function writeElement(userId, name, formula) {
    //const db = getDatabase();
    //console.log("aaaaa");
    set(ref(db, 'Element/' + userId), {
        uid: userId,
        elementName: name,
        elementChemistryFormula: formula,
    }).then((res) => {
        console.log(1);
        //callback();
    }).catch((error) => {
        console.log(error);
        console.log('ishlamadi');
    });
}
function writeMendeleyevJadval(userId, name, belgisi, clas) {
    //const db = getDatabase();
    //console.log("aaaaa");
    set(ref(db, 'MendeleyevJadval/' + userId), {
        uid: userId,
        name: name,
        belgisi: belgisi,
        clas: clas
    }).then((res) => {
        console.log(1);
        //callback();
    }).catch((error) => {
        console.log(error);
        console.log('ishlamadi');
    });
}

const signIn = (email, password, callback) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("sign in bollldi");
            callback();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn(errorCode, errorMessage);
            //reject(errorMessage);
        });
};

const isSignIn = (callback = () => { }) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            //console.log(uid);
            callback(true);
        } else {
            console.warn("no sign in");
            callback(false);
        }
    });
};

const signOutFB = (callback = () => { }) => {
    signOut(auth)
        .then(() => {
            callback(true);
        })
        .catch((error) => {
            callback(false);
        });
};


function getUsers(calback) {
    onValue(ref(db, 'users/'), (data) => {
        const dataVal = data.val();
        calback(dataVal || {})
        //console.log(dataVal);

    })
}
function getJadval(calback) {
    onValue(ref(db, 'MendeleyevJadval/'), (data) => {
        const dataVal = data.val();
        calback(dataVal || {})
        //console.log(dataVal);

    })
}
function getElement(calback) {
    onValue(ref(db, 'Element/'), (data) => {
        const dataVal = data.val();
        calback(dataVal)
        // console.log(dataVal);

    })
}
export { getUsers, createNewUser, signIn, isSignIn, writeElement, getElement, writeMendeleyevJadval, signOutFB, getJadval };
