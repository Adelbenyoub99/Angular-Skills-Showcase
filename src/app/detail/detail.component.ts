import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  article?: Article;
  id?: number;
  contactSent: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const rawId = this.route.snapshot.paramMap.get('id');
    if (rawId) {
      this.id = Number(rawId);
      this.article = this.dataService.getArticle(this.id);
    }
  }

  onLike(): void {
    if (this.article) {
      this.dataService.toggleLike(this.article.id, true);
      // Synchronise la vue locale
      this.article = this.dataService.getArticle(this.article.id);
    }
  }

  onContactSeller(): void {
    this.contactSent = true;
    setTimeout(() => {
      this.contactSent = false;
    }, 4000);
  }
}
