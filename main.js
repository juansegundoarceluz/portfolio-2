let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("bbss");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

 window.onscroll = function(){
     efectoHabilidades();
 }

 const buttonCv = document.getElementById('buttonCv');

 const cvFile = 'file:///C:/Users/juans/resume%20Juan%20Segundo%20Arceluz%20-%20copia.pdf';

 buttonCv.setAttribute('download', 'file:///C:/Users/juans/resume%20Juan%20Segundo%20Arceluz%20-%20copia.pdf');
 buttonCv.setAttribute('href', cvFile);