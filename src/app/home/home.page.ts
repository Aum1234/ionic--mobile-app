import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore: AngularFirestore) {
    this.workCollection = firestore.collection<any>('works')
    
  }
  workCollection: AngularFirestoreCollection<any>

  db_name:string;
  db_numid:string;
  db_work:string;
  db_date:string;
  db_img:string;

  add(){
    const id = this.firestore.createId();
    const work = {
      id: id,
      name: this.db_name,
      number_id: this.db_numid,
      work: this.db_work,
      date: this.db_date,
      img: this.db_img
    }
    this.workCollection.doc(id).set(work)
    .then(()=>{
      this.db_name=""
      this.db_numid=""
      this.db_work=""
      this.db_date=""
      this.db_img=""
    }

    )
  }

}
