import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Pipe({
  name: 'filtroProyectoRevision'
})
export class FiltroProyectoRevisionPipe implements PipeTransform {

  transform(proyectos: Proyecto[], searchText: string) {
    if (searchText == null) return proyectos;
    return proyectos.filter(proyectos =>
        proyectos.namedocrev.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        proyectos.coddocrev.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
