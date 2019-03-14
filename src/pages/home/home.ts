import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CustomerPage } from '../customer/customer';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateAccountPage } from '../create-account/create-account';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { EventManagerProvider } from '../../providers/event-manager/event-manager';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:string;
  group:string;
  cursos:string[] = ['Ionic','Docker','Java', 'Angular'];
  money:number;

  loginForm:FormGroup;

  constructor(public navCtrl: NavController,
    private fb:FormBuilder,
    private login_provider: LoginServiceProvider,
    private events_manager: EventManagerProvider) {
      this.loginForm =this.fb.group({
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
    this.events_manager.setIsLoading(true);
    this.login_provider
    .loginService( this.loginForm.get('user').value, this.loginForm.get('pwd').value)
    .subscribe( (response) =>{
      console.log(response);
      this.events_manager.setIsLoading(false);
      this.navCtrl.push(AboutPage,response);
    }, error => {
      this.events_manager.setIsLoading(false);
      this.events_manager.serMsgToast(error.error.message);
      console.log(error);
    });
  }
  
  goCreateAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

}
