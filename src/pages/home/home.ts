import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import  {Todo}   from './model/todo';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos : Todo[];

  constructor(public navCtrl: NavController, public modalCtrl :ModalController) {

  }

  ionViewDidLoad(){
 
    this.todos = [
      new Todo("hi1", "bla"),
      new Todo("hi2","blubb")
    ];
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((todo) => {
 
          if(todo){
            this.saveItem(todo);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(todo){
    this.todos.push(todo);
  }
  viewItem(todo){
	  this.navCtrl.push(ItemDetailPage, {todo});
  }
}


