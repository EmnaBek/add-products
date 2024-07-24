import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule to the imports array
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  product = {
    id: '',
    name: '',
    description: '',
    image: ''
  };

  products: any[] = [];

  ajout() {
    this.products.push({ ...this.product });
    this.product = {
      id: '',
      name: '',
      description: '',
      image: ''
    };
    console.log(this.products);
  }

  constructor() {}

  ngOnInit(): void {}
}