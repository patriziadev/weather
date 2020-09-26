import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  private monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public day: string;
  public date: number;
  public month: string;

  transform(value: any) {
    value = new Date(value);
    this.day = this.daysArray[value.getDay()];
    this.date = value.getDate();
    this.month = this.monthsArray[value.getMonth()];
    return this.day + ', ' + this.date + ' ' + this.month;
  }

}
