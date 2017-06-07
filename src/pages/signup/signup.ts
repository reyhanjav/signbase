import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { UserDataProvider } from '../../providers/userdata/user-data';
/*
  Generated class for the SignPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user: {username?: string, name?: string, email?: string, password?: string} = {};
    submitted = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public http: Http,
              public userDataProvider:UserDataProvider,
              public loadCtrl: LoadingController) {}

              onSignup(form: NgForm) {
                this.submitted = true;
                let loading = this.loadCtrl.create({
                    content: 'Tunggu sebentar...'
                });

                if (form.valid) {
                  loading.present();
                  let input = JSON.stringify({
                    username: this.user.username,
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                  });
                  this.http.post("http://localhost/OrderHome/BackEnd/signUpInfo.php",input).subscribe(data => {
                       loading.dismiss();
                       let response = data.json();
                       if(response.status == 200){
                         let user=response.data;
                         this.userDataProvider.login(user.user_id,user.username,user.name,user.email);
                          this.navCtrl.setRoot(LoginPage);

                       }
                       this.showAlert(response.message);
        }, err => {
           loading.dismiss();
           this.showError(err);
        });
    }
  }
  showError(err: any){
    err.status==0?
    this.showAlert("Tidak ada koneksi. Cek kembali sambungan Internet perangkat Anda"):
    this.showAlert("Tidak dapat menyambungkan ke server. Mohon muat kembali halaman ini");
  }
  showAlert(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

masuk(){
  this.navCtrl.push(LoginPage);
}
}
