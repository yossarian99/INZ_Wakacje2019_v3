import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
// import {TimeHour} from "../../models/TimeHour";


import { Calendar } from '@ionic-native/calendar/ngx';
import {CalDetailsPage} from '../cal-details/cal-details';
/**
 * Generated class for the CallendarProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-callendar-profill',
  templateUrl: 'callendar-profill.html',
})
export class CallendarProfillPage {
  calendars = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private calendar:Calendar, private plt: Platform) {
    this.counter=0;
    this.nextDay = new Date();
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallendarProfillPage');
  }
  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15 };

    this.calendar.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(res => {
    }, err => {
      console.log('err: ', err);
    });
  }

  openCal(cal) {
    this.navCtrl.push('CalDetailsPage', { name: cal.name })
  }










counter:number;
  Time:Array<number>=[];
   nextDay:Date;

SetForwardTime(h:boolean){

    console.log(this.counter);
    this.ForwardDate();
}
SetBackTime(h:boolean){

    console.log(this.counter);
    this.BackDate();
}
ForwardDate()
{

var i=0;


   this.nextDay.setDate(this.nextDay.getDate() + 1);



  if(this.Time.length==34){
    for(i=34;i>=0;i--){
      this.Time.pop();}
    }

    for(i=6;i<=23;i++) {

      this.nextDay.setHours(i, 0, 0); // 5.30 pm
      if (i == 6 || i == 23) {
        this.Time.push(this.nextDay.getHours());
      } else {
        this.Time.push(this.nextDay.getHours());
        this.Time.push(this.nextDay.getHours());
      }















  }  console.log(this.Time);
}
  BackDate()
  {

    var i=0;


      this.nextDay.setDate(this.nextDay.getDate() - 1);



    if(this.Time.length==34) {


      for (i = this.Time.length; i >= 0; i--) {
        this.Time.pop();
      }
    }

      for(i=6;i<=23;i++) {


        this.nextDay.setHours(i, 0, 0); // 5.30 pm
        if (i == 6 || i == 23) {
          this.Time.push(this.nextDay.getHours()); console.log(this.nextDay);

        } else {
          console.log(this.nextDay);
          this.Time.push(this.nextDay.getHours());
          this.Time.push(this.nextDay.getHours());

        }
      }








      console.log(this.Time);
  }
setDate(){
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate()+1);
  var day = new Date('Apr 30, 2000');
  console.log(day); // Apr 30 2000

  var nextDay = new Date(day);
  nextDay.setDate(day.getDate()+1);
  console.log(nextDay); // May 01 2000
}
}
