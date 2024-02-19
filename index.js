//--Declarando  variables--//
var btnEncrypt = document.querySelector(".btn-encrypt");
var result = document.querySelector(".result");
var container = document.querySelector(".board-container");
var btnCopy = document.querySelector(".btn-copy");
var btnDecrypt = document.querySelector(".btn-decrypt");
var encryptText = document.querySelector(".encrypt");
var warning = document.querySelector(".warning-text");

//--Funcion de boton Encrypt--//
btnEncrypt.addEventListener("click", e=>{
    e.preventDefault();
    let text = encryptText.value;
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(text == ""){
        warning.style.background = "#FF0000";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "500";
        warning.textContent = "Error, el campo no puede estar vacio. Favor de corregir";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }

    else if(text !== txt){
        warning.style.background = "#FF0000";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "500";
        warning.textContent = "Acentos y caracteres especiales no estan permitidos";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }

    else if(text !== text.toLowerCase()){
        warning.style.background = "#FF000";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "500";
        warning.textContent = "El texto debe estar solo en minusculas";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }
    //--sustitucion para encriptar a = ai, e = enter, i = imes, o = ober y u = ufat--//     
    else{
        text = text.replace(/a/mg, "ai");
        text = text.replace(/e/mg, "enter");
        text = text.replace(/i/mg, "imes");
        text = text.replace(/o/mg, "ober");
        text = text.replace(/u/mg, "ufat");    

        result.innerHTML = text;
        container.remove();
        btnCopy.style.visibility = "inherit";
    }
});

//--Hacer funcionat Boton Desencriptar--//
btnDecrypt.addEventListener("click", e=>{
    e.preventDefault();
    let text = encryptText.value;
    let txt = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(text == ""){
        warning.style.background = "#FF0000";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "500";
        warning.textContent = "Error, el campo no puede estar vacio. Favor de corregir";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }

    else if(text !== txt){
        warning.style.background = "#FF0000";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "500";
        warning.textContent = "Acentos y caracteres especiales no estan permitidos";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }

    else if(text !== text.toLowerCase()){
        warning.style.background = "#FF000";
        warning.style.color = "#FFFF";
        warning.style.fontWeight = "500";
        warning.textContent = "El texto debe estar solo en minusculas";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }
    //--sustitucion para encriptar invertidos a = ai, e = enter, i = imes, o = ober y u = ufat--//     
    else{
        text = text.replace(/ai/mg, "a");
        text = text.replace(/enter/mg, "e");
        text = text.replace(/imes/mg, "i");
        text = text.replace(/ober/mg, "o");
        text = text.replace(/ufat/mg, "u");    

        result.innerHTML = text;
        container.remove();
        btnCopy.style.visibility = "inherit";
    }
});

//--boton copiar--//
btnCopy.addEventListener("click", e=>{
    e.preventDefault();
    let copy = result;
    copy.select();
    document.execCommand("copy");
});