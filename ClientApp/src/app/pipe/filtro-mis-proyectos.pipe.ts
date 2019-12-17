import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Pipe({
  name: 'filtroMisProyectos'
})
export class FiltroMisProyectosPipe implements PipeTransform {

  transform(proyectos: Proyecto[], searchText: string) {
    if (searchText == null) return proyectos;
    return proyectos.filter(proyectos =>
        proyectos.coddoc.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
