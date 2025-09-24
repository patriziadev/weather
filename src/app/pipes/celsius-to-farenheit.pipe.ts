import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusToFarenheit',
  standalone: false,
})
export class CelsiusToFarenheitPipe implements PipeTransform {
  transform(value: any) {
    return Number(value) * 1.8 + 32;
  }
}
