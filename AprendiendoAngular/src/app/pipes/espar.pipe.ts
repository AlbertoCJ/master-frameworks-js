import { Pipe, PipeTrasnform, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform{
    transform(value: any){
        let espar = 'es impar';
        if (value % 2 == 0) {
            espar = 'es par';
        }
        return 'El año es: ' + value + ' y ' + espar;
    }
}