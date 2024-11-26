import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],

})
export class ArticlesComponent implements OnInit {

totalNbrLike: number = 0;
comment: string = "Ceci est un commentaire";
@Output () info = new EventEmitter<string>();


@Input () titreArticle: string;
@Input () prixArticle: number;
@Input () description: string;
@Input () urlImg: string;
@Input () textAltImg: string;
@Input () dispo: boolean;
@Input () idArticle: number;
jaime: boolean = true;

constructor() {}
ngOnInit(): void {

}

  onLike(){
    if(this.jaime === true) {
      this.totalNbrLike++;
      this.jaime = false;
    } else {
      this.totalNbrLike--;
      this.jaime = true;
    }
   
   this.info.emit(this.titreArticle);

  }

  getColor(){
    if(this.dispo === true){
       return "green"
    } else {
       return "red"
    }

  }
}
