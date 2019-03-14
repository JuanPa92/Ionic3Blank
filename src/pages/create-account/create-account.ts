import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsServiceProvider } from '../../providers/students-service/students-service';
import { Students } from '../../model/studentsModel';

/**
 * 
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  createAccountForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder,
    private students_provider: StudentsServiceProvider,
    private loading: LoadingController) {
      this.createAccountForm = this.fb.group({
        name:['',Validators.required],
        app:['',Validators.required],
        apm:[''],
        email:['',[Validators.required, Validators.email]],
        matricula:['',Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  save(){
    let presentLoading = this.loading.create({
      content: 'Espere por favor'
    });
    presentLoading.present();
    let accountInfo: Students = this.createAccountForm.getRawValue();
    this.students_provider
      .createAccountSudent( accountInfo )
      .subscribe(
        () => {
          console.log( 'Data' );
        }, error => {
          presentLoading.dismiss();
          console.log( 'Error', error);
        }, () => {
          console.log( 'Success' );
          presentLoading.dismiss();
        }
      );

  }

}
