
<script src="cipher.js"></script>

let btn= document.getElementById("btn");
let cifrador= document.getElementById("cifrador");
let btn2= document.getElementById("btn2");
let descifrador= document.getElementById("descifrador");
let btn3= document.getElementById("btn3");
let btn4= document.getElementById("btn4");


btn.addEventListener("click", () => {
    if (cifrador.style.display === "none") {
        cifrador.style.display = "block";
    } else {
        cifrador.style.display = "none";
    }
});

btn2.addEventListener("click", () => {
    if (descifrador.style.display === "none") {
        descifrador.style.display = "block";
    } else {
        descifrador.style.display = "none";
    }
});


btn3.addEventListener("click", ()=> {
    console.log("boton3 cifrar");
   
    cifrar();
});

btn4.addEventListener("click", ()=> {
    console.log("boton4 descifrar");

});
   