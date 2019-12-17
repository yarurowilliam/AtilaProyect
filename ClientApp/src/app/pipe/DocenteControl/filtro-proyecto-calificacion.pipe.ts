import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Pipe({
  name: 'filtroProyectoCalificacion'
})
export class FiltroProyectoCalificacionPipe implements PipeTransform {

  transform(proyectos: Proyecto[], searchText: string) {
    if (searchText == null) return proyectos;
    return proyectos.filter(proyectos =>
        proyectos.idcalificador.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        proyectos.namecalificador.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
