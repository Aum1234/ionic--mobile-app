import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  itemCollecton: AngularFirestoreDocument<any>;
  item: Observable<any>;
  id: string;

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.itemCollecton = firestore.doc<any>('works/' + this.id);
    this.item = this.itemCollecton.valueChanges();
    }

  ngOnInit() {
    this.item.subscribe((data: any) => {
      this.db_name = data.name;
      this.db_numid = data.number_id;
      this.db_work = data.work;
      this.db_date = data.date;
      this.db_img = data.img;
      console.log(data)
    }

    )
  }

  db_name:string;
  db_numid:string;
  db_work:string;
  db_date:string;
  db_img:string;

  edit(){
    const item = {
      name: this.db_name,
      number_id: this.db_numid,
      work: this.db_work,
      date: this.db_date,
      img: this.db_img
    }
    this.itemCollecton.update(item);
  }
}
