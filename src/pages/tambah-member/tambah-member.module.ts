import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahMemberPage } from './tambah-member';

@NgModule({
  declarations: [
    TambahMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(TambahMemberPage),
  ],
})
export class TambahMemberPageModule {}
