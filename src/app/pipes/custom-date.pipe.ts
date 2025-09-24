import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: false,
})
export class CustomDatePipe implements PipeTransform {
  private monthsArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  private daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public day: string;
  public date: number;
  public month: string;

  transform(value: any) {
    value = new Date(value);
    const today = new Date();
    if (value.getDate() === today.getDate() + 1) {
      return 'Tomorrow';
    }
    this.day = this.daysArray[value.getDay()];
    this.date = value.getDate();
    this.month = this.monthsArray[value.getMonth()];
    return this.day + ', ' + this.date + ' ' + this.month;
  }
}
