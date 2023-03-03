function ValidatingLoggin(username, password){
    if (password === "PassW"){
        document.getElementById('test3').innerHTML = username;

        document.getElementById("submitBtn").setAttribute("data-bs-dismiss","modal");
        document.getElementById("submitBtn").click();
    }
    else{
        alert('Wrong Password')
    }
}
const loginbtn = document.getElementById('submitBtn');

loginbtn.addEventListener('click', () => {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    ValidatingLoggin(username, password)
})


