document.getElementById('login-btn').addEventListener('click', function(){
    const userID = document.getElementById('user-id');
    const user = userID.value;

    const pass = document.getElementById('password');
    const password = pass.value;
    console.log(user, password);

    if(user === 'Royal' && password === 'sanbar'){
        window.location.href = "index.html"
    } else {
        alert('Please input correct password')
    }
});
