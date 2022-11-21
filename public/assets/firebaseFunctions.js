const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");
// const signOutBtn = document.getElementById("signOutBtn");
const forgetPassBtn = document.getElementById("forgetPassBtn");
const forgetPassBtn2 = document.getElementById("forgetPassBtn2");

const success = document.getElementById("success-alert");
const alert = document.getElementById("error-alert");
const root = document.getElementById("root");

const displayName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("./Dashboard/")
    }
});


signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            user.updateProfile({
                displayName,
            });
            success.classList.toggle("hidden");
            success.innerHTML = "User created successfully";
            setTimeout(function () {
                success.classList.toggle("hidden");
            }, 5000);
            root.innerHTML = displayName;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert.classList.toggle("hidden");
            console.log(errorCode);
            // alert.innerHTML = errorMessage + "<br>" + errorCode;
            alert.innerHTML = errorMessage;
            setTimeout(function () {
                alert.classList.toggle("hidden");
            }, 5000);
        });
});

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email2.value, password2.value)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert.classList.toggle("hidden");
            console.log(errorCode);
            // alert.innerHTML = errorMessage + "<br>" + errorCode;
            alert.innerHTML = errorMessage;
            setTimeout(function () {
                alert.classList.toggle("hidden");
            }, 5000);
        });
});

forgetPassBtn.addEventListener("click", () => {
    auth.sendPasswordResetEmail(email.value)
        .then(() => {
            success.classList.toggle("hidden");
            success.innerHTML = "Reset link sent to your email id" + "<br>" + email.value;
            success.innerHTML += "<br>" + "Please check the spam folder if you don't see it in your inbox";
            setTimeout(function () {
                success.classList.toggle("hidden");
            }, 5000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert.classList.toggle("hidden");
            console.log(errorCode);
            alert.innerHTML = errorMessage;
            setTimeout(function () {
                alert.classList.toggle("hidden");
            }, 5000);
        });
});
forgetPassBtn2.addEventListener("click", () => {
    auth.sendPasswordResetEmail(email2.value)
        .then(() => {
            success.classList.toggle("hidden");
            success.innerHTML = "Reset link sent to your email id" + "<br>" + email.value;
            success.innerHTML += "<br>" + "Please check the spam folder if you don't see it in your inbox";
            setTimeout(function () {
                success.classList.toggle("hidden");
            }, 5000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert.classList.toggle("hidden");
            alert.innerHTML = errorMessage;
            setTimeout(function () {
                alert.classList.toggle("hidden");
            }, 5000);
        });
});