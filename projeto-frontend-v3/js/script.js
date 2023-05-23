let darkmode = document.querySelector('#darkmode');
    // let: declara uma variável = querySelector: pode ser uma class(.) ou um id (#)
darkmode.onclick = ()=>{
    //"=>" arrow function(função de clique)
    
    if(darkmode.classList.contains('bx-moon')){
        // alert("MODO ESCURO ATIVADO");
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('color');
    }
    
}