import {obtenerMesEspañol} from './global.js';

//Hora Y Fecha Actual-----------------------------------------------------------------------
let date = new Date();
const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];



document.getElementById("current_date").innerHTML = "Fecha de visita: " + day +" de "+ obtenerMesEspañol(month) + " "+year;  
//-----------------------------------------------------------------------

//FUNCIONES DE AUMENTO DE REGISTROS-----------------------------------------------------------------------


function More(p_actual) {
  console.log(p_actual);
  
  
  if(p_actual == 1){
    document.getElementById('one').classList.add('progres_active');    
    document.getElementById('three').classList.remove('progres_active');


    document.getElementById('page_1').style = "display: initial !important;";    
    document.getElementById('page_2').style = "display: none !important;";

    document.getElementById('footer_container_page_1').style = "display: initial !important;";    
    document.getElementById('footer_container_page_2').style = "display: none !important;";    

  }
  else if(p_actual == 2){
    document.getElementById('one').classList.remove('progres_active');    
    document.getElementById('three').classList.add('progres_active');

    document.getElementById('page_1').style = "display: none !important;";    
    document.getElementById('page_2').style = "display: initial !important;";

    document.getElementById('footer_container_page_1').style = "display: none !important;";    
    document.getElementById('footer_container_page_2').style = "display: initial !important;";
    

  }else{
    console.log("No exite la pagina");
  }
  
  if(p_actual < 2){
    actual_page += 1
  }

}

function restart(p_actual) {
        
  if(p_actual == 2){
    document.getElementById('one').classList.add('progres_active');    
    document.getElementById('three').classList.remove('progres_active');


    document.getElementById('page_1').style = "display: initial !important;";    
    document.getElementById('page_2').style = "display: none !important;";

    document.getElementById('footer_container_page_1').style = "display: initial !important;";    
    document.getElementById('footer_container_page_2').style = "display: none !important;";    

  }else{
    console.log("No exite la pagina");
  }
  
  
 }
//-----------------------------------------------------------------------

var actual_page = 1;
More(actual_page)
document.getElementById('ant').addEventListener('click',() => restart(actual_page));        
document.getElementById('next').addEventListener('click',() => More(actual_page));    