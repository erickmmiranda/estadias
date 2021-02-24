import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroExtension'
})
export class FiltroExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {


    let icono : any;

    switch(value){

      case'zip':
      icono = 'faZip';
      break;

      case 'jpg':
        icono = 'faJpg';
        break;
      case 'png':
        icono = 'faPng';
        break;
      case 'pptx':
        icono = 'faPptx';
        break;
      case 'docx':
        icono = 'faDocx';
        break;
      case 'pdf':
        icono = 'faPdf';
        break;
      
        default:

        icono = '';
    }

    return icono;
  }

}
