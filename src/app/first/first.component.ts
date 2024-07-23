/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',  // Sélecteur
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  

}
//export class FirstComponent implements OnInit{
 product ={
  id :'',
  name :'',
  description :'',
  image:''
 }
 
 products:any[]=[]; 
ajout(){
  this.products.push(this.product);
  this.product={
    id :'',
  name :'',
  description :'',
  image:''
console.log(this.products);

  }

}

  constructor() {}

  ngOnInit(): void {}
}
