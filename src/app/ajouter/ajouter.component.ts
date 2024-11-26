import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// dans le cas d'un formulaire reactive on devras importer
// import { ReactiveFormsModule, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule, CommonModule], // ajouter ReactiveFormsModule ici
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent implements OnInit{
titleToAdd = '';// new FormControl('')
priceToAdd = '';//new FormControl('')
  constructor(){}
ngOnInit(): void {
  
}
onSubmit(form: NgForm){
const newTitle = this.titleToAdd; // .value
const newPrice = this.priceToAdd; // .value
console.log("newTitel : " + newTitle);
console.log("newPrice : " + newPrice);
}

}
