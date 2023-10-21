import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByTime'
})
export class OrderByTimePipe implements PipeTransform {
  transform(array: any[]): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    return array.slice().sort((a, b) => {
      const startTimeA = this.get24HourTime(a.startTime);
      const startTimeB = this.get24HourTime(b.startTime);

      if (startTimeA < startTimeB) {
        return -1;
      } else if (startTimeA > startTimeB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  private get24HourTime(time: string): string {
    const timeParts = time.split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    if (time.toLowerCase().includes('pm')) {
      hours += 12;
    }

    return `${hours < 10 ? '0' : ''}${hours}:${minutes}`;
  }
}
