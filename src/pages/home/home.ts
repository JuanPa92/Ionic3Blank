import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CustomerPage } from '../customer/customer';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  group:string;
  cursos:string[] = ['Ionic','Docker','Java', 'Angular'];
  money:number;

  loginForm:FormControl;

  constructor(public navCtrl: NavController,
    private fb:FormBuilder) {
      this.loginForm = this.fb.group({
        user:['',Validators.required],
        pwd: ['',Validators.required]
      });
  }

  goAbout(){
    //console.log("Primer click");
    let data = {user:this.user, group:this.group, 
    courses:this.cursos,
    date:new Date(),
    money:this.money};

    console.log(data);
    this.navCtrl.push(AboutPage, data);
  }

  login(){
    
  }

}
