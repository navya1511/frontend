firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("/")
    } else {
        document.getElementById("user").innerHTML = user.email
    }
});

function logout() {
    firebase.auth().signOut()
};