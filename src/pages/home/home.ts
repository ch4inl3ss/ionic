import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  {Todo}   from './model/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items : Todo[];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
 
    this.items = [
      new Todo("hi1", "bla"),
      new Todo("hi2","blubb")
    ];
 
  }
 
  addItem(){
 
  }
 
  viewItem(){
 
  }
 
}


