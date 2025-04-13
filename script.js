let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact"); 

home.addEventListener("click", function() { 
    window.location.href = "index.html";
});

about.addEventListener("click", function() {  
    window.location.href = "about.html";
} );

contact.addEventListener("click", function() {
    window.location.href = "contact.html";
});
