import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { IonicAuthService } from '../ionic-auth.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  userDetail: string;

  itemCollection: AngularFirestoreCollection<any>;
  item: Observable<any>;
  items: Observable<any[]>;

constructor
(private firestore: AngularFirestore,
  private router: Router,
  private ionicAuthService: IonicAuthService) {
  this.itemCollection = firestore.collection<any>('works');
  this.items = this.itemCollection.valueChanges();
 }

  ngOnInit() {
    //authen
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
  }

  //signout
  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }

  remove(id:string){
    this.itemCollection.doc(id).delete()
  }
}
