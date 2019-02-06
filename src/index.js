

let btn= document.getElementById("btn");
let cifrador= document.getElementById("cifrador");
let btn2= document.getElementById("btn2");
let descifrador= document.getElementById("descifrador");
let btn3= document.getElementById("btn3");
let btn4= document.getElementById("btn4");
let codigoResultado=document.getElementById("codigo");
let descifradoResultado=document.getElementById("descif");

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
    const desp= document.getElementById("desp").value;
    let text= document.getElementById("texto").value;    
    codigoResultado.innerHTML =  window.cipher.encode(parseInt(desp), text);
});

btn4.addEventListener("click", ()=> {
     const desp2= document.getElementById("desp2").value;
    let code= document.getElementById("code").value;
    codigoResultado.innerHTML =window.cipher.decode(parseInt(desp2), code);
});
   