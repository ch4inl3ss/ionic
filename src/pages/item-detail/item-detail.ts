import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Todo } from '../home/model/todo';

 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  todo:Todo;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.todo = this.navParams.get('todo');
  }
 
}