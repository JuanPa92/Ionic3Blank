import { Component } from '@angular/core';
import { NavController, NavParams, Item } from 'ionic-angular';
import { CustomerPage } from '../customer/customer';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { EventManager } from '@angular/platform-browser';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

/**
 * Generated class for the AboutPage page.
 * 
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  user:string;
  data:any;
  students: any[] = [];

  colorLabel:string='secondary';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private student_provider: StudentsServiceProvider,
    private events_manager: EventManagerProvider) {
  
    this.data = this.navParams.data;
    this.student_provider
        .getStudents()
        .subscribe( (response:any) =>{
          this.students = response;
        },error => {
          console.log(error);
        });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  goCustomer(){
    setTimeout( () => {
      this.colorLabel = 'danger';
    },3*1000);

    //this.navCtrl.push(CustomerPage);
  }

  deleteCard(student){
    this.events_manager.setIsLoading(true);
    this.student_provider
        .deleteStudent(student.id)
        .subscribe( () => {
          this.events_manager.setIsLoading(false);
          //this.students = this.students.filter( item => student.id != item);
          this.loadStudents();
          this.events_manager.serMsgToast("Se elimino correctamente");
        }, error => {
          this.events_manager.setIsLoading(false);
          this.events_manager.serMsgToast(error.error.message);
        });

    console.log(student);
  }

  loadStudents(){
    this.student_provider
        .getStudents()
        .subscribe( (response:any) => {
          this.students = response;
        }, error => {
          console.log(error);
        })
  }

}
