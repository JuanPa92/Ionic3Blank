import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CustomerPage } from '../pages/customer/customer';
import { PipesModule } from '../pipes/pipes.module';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { StudentsServiceProvider } from '../providers/students-service/students-service';
import { HttpClientModule } from '@angular/common/http';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { LoginProviderMock } from '../mock/loginProviderMock';
import { EventManagerProvider } from '../providers/event-manager/event-manager';
import { CarComponent } from '../components/car/car';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CustomerPage,
    CreateAccountPage,
    CarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CustomerPage,
    CreateAccountPage,
    CarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentsServiceProvider,
    // {
    //   provide: LoginServiceProvider,
    //   useClass: LoginProviderMock
    // }
    LoginServiceProvider,
    EventManagerProvider
  ]
})
export class AppModule {}
