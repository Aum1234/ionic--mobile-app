import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  item: Observable<any>;
  items: Observable<any[]>;

constructor(private firestore: AngularFirestore) {
  this.itemCollection = firestore.collection<any>('works');
  this.items = this.itemCollection.valueChanges();
 }

  ngOnInit() {
  }

  remove(id:string){
    this.itemCollection.doc(id).delete()
  }
}
