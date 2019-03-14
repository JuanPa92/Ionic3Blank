import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../model/studentsModel';
import { CREATE_USER,  GET_USERS, DELETE_USER } from '../../endPoints/endPoints';

/*
  Generated class for the StudentsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StudentsServiceProvider Provider');
  }

  createAccountSudent(account:Students){
    return this.http.post(CREATE_USER, account);
  }

  getStudents(){
    return this.http.get(GET_USERS);
  }

  deleteStudent(id: number){
     return this.http.delete(`${DELETE_USER}${id}`);
  }

}
