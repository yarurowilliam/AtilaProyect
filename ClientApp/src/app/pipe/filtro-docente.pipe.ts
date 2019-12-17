import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from 'src/app/models/docente';
@Pipe({
  name: 'filtroDocente'
})
export class FiltroDocentePipe implements PipeTransform {

  transform(docentes: Docente[], searchText: string) {
    if (searchText == null) return docentes;
    return docentes.filter(docente =>
        docente.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.primerApellido.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.primerNombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        docente.rol.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}
