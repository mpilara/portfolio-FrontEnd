function cambiar_parrafo(){
    document.getElementById("edit-acercaDe").style.display="block";
    //a la variable texto le asignamos el valor del parrafo
    let texto = document.getElementById("texto-Acercade").innerText;
    console.log(texto);
}

function myFuction2(valor){
    document.getElementById("texto-Acercade").innerText=valor;
};

function logMessage(message){
    console.log(message + "<br>");
}

//cuando presiono enter, aparece el texto y se oculta el input
let textarea = document.getElementById("edit-acercaDe")
textarea.addEventListener("keyup", (e) => {
    logMessage('Key "${e.key}" release [event: keyup]');
    if (e.key=="Enter"){
        document.getElementById("edit-acercaDe").style.display="none"
    }
});