import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Pipe({
  name: 'filtroConsultaProyecto'
})
export class FiltroConsultaProyectoPipe implements PipeTransform {

  transform(proyectos: Proyecto[], searchText: string) {
    if (searchText == null) return proyectos;
    return proyectos.filter(proyectos =>
        proyectos.estado.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
