import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticlesComponent } from '../articles/articles.component';
import { DataService } from '../data.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, FormsModule, ArticlesComponent, RouterModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  searchTerm: string = '';
  feedbackMessage: string = '';
  private subscription?: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Écoute réactive du store DataService
    this.subscription = this.dataService.articles$.subscribe({
      next: (data) => (this.articles = data)
    });

    // Tentative de synchronisation réseau avec repli transparent
    this.dataService.getListFromServer().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get filteredArticles(): Article[] {
    if (!this.searchTerm.trim()) {
      return this.articles;
    }
    const term = this.searchTerm.toLowerCase();
    return this.articles.filter(
      (a) =>
        a.titreArticle.toLowerCase().includes(term) ||
        a.description.toLowerCase().includes(term)
    );
  }

  onAffiche(titre: string): void {
    this.feedbackMessage = `Merci d'avoir interagi avec l'article : "${titre}"`;
    setTimeout(() => {
      this.feedbackMessage = '';
    }, 4000);
  }

  onLikeToggled(event: { id: number; liked: boolean }): void {
    this.dataService.toggleLike(event.id, event.liked);
  }
}
