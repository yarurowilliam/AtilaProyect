import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
@Pipe({
  name: 'filtroAsignatura'
})
export class FiltroAsignaturaPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], searchText: string) {
    if (searchText == null) return asignaturas;
    return asignaturas.filter(asignatura =>
        asignatura.id.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        asignatura.nombreAsignatura.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}
