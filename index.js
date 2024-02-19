//--Declarando  variables--//
var btnEncrypt = document.querySelector(".btn-encrypt");
var btnDeccrypt = document.querySelector(".bnt-decrypt");
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
        warning.textContent = "El texto debe estar solo en minusulas";
        
        setTimeout(()=>{
            warning.removeAttribute("style");
        },1000);
    }

});
