import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Todo } from '../home/model/todo';

/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title : String;
  description:String;

  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveItem(){
 
    let newItem = 
      new Todo(this.title,this.description)
    ;
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
