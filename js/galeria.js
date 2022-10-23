
function next(){
    if(boton!=7){
        boton++;    
    }else{
        boton=1;
    }
    clearInterval(tiempo);
    tiempo=null;
    tiempo=setInterval('contador()',7000);
}
function previous(){
    if(boton!=1){
        boton--;    
    }else{
        boton=7;
    }
    clearInterval(tiempo);
    tiempo=null;
    tiempo=setInterval('contador()',7000);
}
function contador(){
	if(boton == 1){
        let a = document.getElementById("buttonNext1");
	    a.click();
    }else if(boton==2){
        let a = document.getElementById("buttonNext2");
	    a.click();
    }else if(boton==3){
        let a = document.getElementById("buttonNext3");
	    a.click();
    }else if(boton==4){
        let a = document.getElementById("buttonNext4");
	    a.click();
    }else if(boton==5){
        let a = document.getElementById("buttonNext5");
	    a.click();
    }else if(boton==6){
        let a = document.getElementById("buttonNext6");
	    a.click();
    }else if(boton==7){
        let a = document.getElementById("buttonNext7");
	    a.click();
    }
	
}
var boton=1;

var tiempo=setInterval('contador()',7000);