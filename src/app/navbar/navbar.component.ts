import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 /**
  * la variable desplegable recibe a un objeto (:) de tripo (string), los valore 
  * son de tipo (boolean)
  */
  desplegables: { [key:string ]: boolean} ={ // cambiar key por category
    downpipe: false,
    escapes: false,
    multiples:false,
  };


  /**
   * la funcion mostrarOpciones recibe un parametro categoria de tipo (string)
   * en la propiedad se cambia los valores del objeto ("desplegable"),para acceder a una de las propiedade
   * [categoria] accede a la propiedad atra vez de desplegable con un valor true, para mostrar las opciones 
   */
  mostrarOpciones(categoria:string){
    this.desplegables[categoria]= true;
    console.log('Mostrar opciones',categoria);
  }

  /**
   * 
   * @param categoria esta parte del codigo es para ocular las opciones 
   * de categoria 
   */
 ocultarOpciones(categoria :string){
    this.desplegables[categoria]= false;
  }



  /**
   * La función alterna el valor de una categoría específica en el objeto "Desplegables" y registra el
   * Resultar a la consola.
   * @param {String} categoria - El parámetro "categoria" es una cadena que representa la categoría de
   * El menú desplegable.
   */
  toggleDesplegable(categoria: string){
    this.desplegables[categoria]= !this.desplegables[categoria];
    console.log('Desplegable',categoria,this.desplegables[categoria]);
  }




  /*
  opcioneSeleccionada: string | null= null;
  mostrarOpciones(opcion:string){
    if (this.opcioneSeleccionada === opcion){
      this.opcioneSeleccionada = null;

    }else{
      this.opcioneSeleccionada = opcion;
    }
  }
    */
 
 
  }

