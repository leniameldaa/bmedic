import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from "firebase";
import 'rxjs';

import { Rapat } from "../../data/rapat.interface";
import { Toast } from 'ionic-angular/components/toast/toast';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthService } from '../../services/authService';


/**
 * Generated class for the NotulenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notulen',
  templateUrl: 'notulen.html',
})
export class NotulenPage {
  tes: string = "lala"
  rapats : Array<Rapat> = []
  rapat: any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private authService: AuthService
  ) {
    //this.getRapat();
  }

  ionViewDidLoad() {
    this.rapat = this.navParams.get("kiriman")
    console.log('ionViewDidLoad NotulenPage');
    console.log(this.rapat);
  }

  // @ViewChild('myInput') myInput: ElementRef;
  // resize() {
  //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
  //     var scrollHeight = element.scrollHeight;
  //     element.style.height = scrollHeight + 'px';
  //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  // }

 

  //  firebase.database().ref('rapatTable/'+ form.value.namaRapat).set({
    //  notulenRapat: form.value.isi,
      //  judulNotulen: form.value.judul,
        //tglNotulen: form.value.tgl        
    //})
    // getRapat(){
    //   var rapatTable = firebase.database().ref("rapatTable/")
    //   return rapatTable.on('value', data=>{
    //     this.rapats = []
    //     data.forEach ( rapat =>{
    //       this.rapats.push(rapat.val())
    //       console.log(this.rapats)
    //       return false
    //     })
    //   })
    // }

  

   // notulen(data){
    //  firebase.database().ref('rapatTable/' + data.namaRapat).update({
 //judulNotulen: form.value.judul,        
    //  tglNotulen: form.value.tgl,  
     // notulenRapat : form.value.isi 
   //   judulNotulen: data.value.judul,        
   //   tglNotulen: form.value.tgl,  
    //  notulenRapat : form.value.isi       
  //  })
  //  this.presentToast("Notulen berhasil ditambahkan")
      
  // }
  
 submit(form: NgForm){    
  firebase.database().ref('rapatTable/' + this.rapat.namaRapat).update({
    judulNotulen: form.value.judul,        
     tglNotulen: form.value.tgl,  
     notulenRapat : form.value.isi 
    //  judulNotulen: data.value.judul,        
    //  tglNotulen: data.value.tgl,  
     // notulenRapat : data.value.isi       
    })
    this.presentToast("Notulen berhasil ditambahkan")
 
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.pop()
  }


}
