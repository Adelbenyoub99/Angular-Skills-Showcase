import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from '../articles/articles.component';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, ArticlesComponent, RouterModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  message: string = '';
  liste: any = [];

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.getList();
  }

  onAffiche(arg: string) {
    this.message = 'Merci d\'avoir voté pour l\'article : ' + arg;
  }

  getList() {
    this.dataservice.getListFromServer().subscribe(liste => {this.liste = liste})

  }
}
