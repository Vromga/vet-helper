import { Injectable } from '@angular/core';

interface ITime {
  hourInDay: number;
  minutesInHour: number;
  secondsInMinute: number;
  millisecondsInSecond: number;
  dayInYear: number;
}

const timeFormat: ITime = {
  hourInDay: 24,
  dayInYear: 365.25,
  secondsInMinute: 60,
  minutesInHour: 60,
  millisecondsInSecond: 1000
};

@Injectable({
  providedIn: 'root'
})
export class DateOfBornService {

  constructor() {
  }

  public calculateDate(date: number): string {
    const age =
      +date /
      (
        timeFormat.hourInDay *
        timeFormat.secondsInMinute *
        timeFormat.minutesInHour *
        timeFormat.dayInYear *
        timeFormat.millisecondsInSecond);
    console.log(age);
    return Math.floor(age).toString();
  }
}
