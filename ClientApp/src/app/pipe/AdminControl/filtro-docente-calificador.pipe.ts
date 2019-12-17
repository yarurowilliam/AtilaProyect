import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from 'src/app/models/docente';

@Pipe({
  name: 'filtroDocenteCalificador'
})
export class FiltroDocenteCalificadorPipe implements PipeTransform {

  transform(docentes: Docente[], searchText: string) {
    if (searchText == null) return docentes;
    return docentes.filter(docente =>
        docente.rol.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }

}
