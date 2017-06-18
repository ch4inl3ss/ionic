import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Todo } from '../home/model/todo';

 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  title:String ;
  description : String;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('todo').title;
    this.description = this.navParams.get('todo').description;
  }
 
}