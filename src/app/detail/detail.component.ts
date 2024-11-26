import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  id; 
  titre: string;
  prix: number;
  description: string;
  urlImg: string;
constructor(private route: ActivatedRoute, private dataservice: DataService){}
ngOnInit(): void {
  const id = this.route.snapshot.params["id"];
  this.id = id;
  this.titre = this.dataservice.getArticle(id).titreArticle;
  this.prix = this.dataservice.getArticle(id).prixArticle;
  this.description = this.dataservice.getArticle(id).description;
  this.urlImg = this.dataservice.getArticle(id).urlImg;
}
}
