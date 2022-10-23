function validar(){
   let nombre = document.getElementById("nombre").value;
   let apellido = document.getElementById("apellido").value;
   let email = document.getElementById("email").value;
   let pasa=true;
   document.getElementById('resultadoValidacion').innerHTML="";
   if(nombre==""){
      document.getElementById('resultadoValidacion').innerHTML+=`<p>Debe ingresar un nombre.</p>`;
      pasa=false;
   }
   if(apellido==""){
      document.getElementById('resultadoValidacion').innerHTML+=`<p>Debe ingresar un apellido.</p>`;
      pasa=false;
   }
   let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if ( !expr.test(email) ){
      document.getElementById('resultadoValidacion').innerHTML+=`<p>Debe ingresar un email.</p>`;
      pasa=false;
   }
   if(pasa){
      let boton = document.getElementById("boton");
      boton.type="submit";
      boton.click();
   }
}
