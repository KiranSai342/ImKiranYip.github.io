document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;
    
    if (!name) {
    alert("Name is required!");
    return;
    }
    if (!email) {
    alert("Email is required!");
    return;
    }
    if (!message) {
    alert("Message is required!");
    return;
    }
    
    
    });