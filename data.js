const form = document.querySelector('form');
const h1 = document.querySelector('h1');

 

form.onsubmit = (e) => {
    e.preventDefault();
    
    const form_data = new FormData(e.target);
    fetch("https://script.google.com/macros/s/AKfycbzStmCPJGUM8MUb1fQ4XGJkuVDsn6rrsSnlEXEl5LdiuVFz7AUt7kHIqPbqnKIscGOoMg/exec",{
        method: "POST",
        body: form_data
        
    })
    .then(res => res.text()).then(msg => h1.innerHTML = msg);
}



function viewData(){
    window.location.href ="view.html"
}






