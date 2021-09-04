import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clickedImage: string;

  constructor(public router: Router, private camera: Camera, public actionSheetController: ActionSheetController, private authService: AuthenticationService) { }

async openeditprofile() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Option',
    cssClass: 'action-sheets-basic-page',
    buttons: [
      {
        text: 'Take photo',
        role: 'destructive',
        icon: 'ios-camera-outline',
        handler: () => {
          this.takephoto();
        }
      },
      {
        text: 'Choose photo from Gallery',
        icon: 'ios-images-outline',
        handler: () => {
          this.openGallery();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
]
});
  await actionSheet.present();
}

takephoto() {
  const options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  openGallery() {
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }
    
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.clickedImage = base64Image;
        }, (err) => {
          // Handle error
         })
        }
  logout() {
    console.log('you click me')
    this.authService.logout();
  }

  profileDetails() {
    this.router.navigate(['/tabs/tab3/profile-details']);
  }

  coupons() {
    this.router.navigate(['/tabs/tab3/coupons']);
  }

  helpCenter() {
    this.router.navigate(['/tabs/tab3/help-center']);
  }

  referEarn() {
    this.router.navigate(['/tabs/tab3/refer-earn']);
  }

  orders() {
    this.router.navigate(['/tabs/tab3/orders']);
  }

  settings() {
    this.router.navigate(['/tabs/tab3/settings']);
  }

  eglCredit() {
    this.router.navigate(['/tabs/tab3/egl-credit']);
  }

  privacyPolicy() {
    this.router.navigate(['/tabs/tab3/privacy-policy']);
  }

  termsOfUse() {
    this.router.navigate(['/tabs/tab3/terms-of-use']);
  }
}
