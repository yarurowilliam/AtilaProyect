import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Pipe({
  name: 'filtroEstudiante'
})
export class FiltroEstudiantePipe implements PipeTransform {

  transform(estudiantes: Estudiante[], searchText: string) {
    if (searchText == null) return estudiantes;
    return estudiantes.filter(estudiante =>
        estudiante.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        estudiante.nombres.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        ||
        estudiante.apellidos.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}
