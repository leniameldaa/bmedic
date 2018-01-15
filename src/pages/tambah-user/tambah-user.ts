import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';
import firebase from 'firebase';
/**
 * Generated class for the TambahUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tambah-user',
  templateUrl: 'tambah-user.html',
})
export class TambahUserPage {
  picData:any;
  picUrl:any;
  myPicRef:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Camera:Camera) {
    //this.myPicRef=firebase.storage().ref('/');
  }
  
  // addProfile(){
  //   Camera.getPicture({
  //     quality:100,
  //     destinationType:Camera.DestinationType.DATA_URL,
  //     sourceType:Camera.PictureSourceType.CAMERA,
  //     encodingType:Camera.EncodingType.JPEG,
  //     saveToPhotoAlbum:true
  //   }).then(ImageData=>{
  //     this.picData=ImageData
  //     this.upload()
  //   })
  // }

  // upload(){
  //   this.myPicRef.child(this.uid()).child('pic.png')
  //   .putString(this.picData,'base64',{contentType:'image/jpeg'})
  //   .then(savepic=>{this.picUrl=savepic.downloadURL
  //   })
  // }
  // uid() {
  //   var d = new Date().getTime();
  //   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
  //     var r = (d + Math.random() * 16) % 16 | 0;
  //     d = Math.floor(d / 16);
  //     return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  //   });
  //   return uuid;
  // }
  captureDataUrl:string;

  selectImage(){
    const cameraOptions: CameraOptions={
      quality:50,
      destinationType:Camera.DestinationType.DATA_URL,
      encodingType:Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
    };

    Camera.getPicture(cameraOptions).then((ImageData)=>{
      this.captureDataUrl='data:image/jpeg;base64,'+ImageData;
    },(err)=>{
      //error
    });

  }

  addProfile(){
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
     // Do something here when the data is succesfully uploaded!
    });
  }


}
