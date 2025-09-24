import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotToComma',
  standalone: false,
})
export class DotToCommaPipe implements PipeTransform {
  transform(value: any) {
    return value.toString().replace(/\./g, ',');
  }
}
