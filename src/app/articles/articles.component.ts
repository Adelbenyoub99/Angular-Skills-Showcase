import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  @Input() idArticle: number = 0;
  @Input() titreArticle: string = '';
  @Input() prixArticle: number = 0;
  @Input() description: string = '';
  @Input() urlImg: string = '';
  @Input() textAltImg: string = '';
  @Input() dispo: boolean = true;
  @Input() totalNbrLike: number = 0;

  @Output() info = new EventEmitter<string>();
  @Output() likeToggled = new EventEmitter<{ id: number; liked: boolean }>();

  jaime: boolean = false;
  comment: string = '';

  onLike(): void {
    this.jaime = !this.jaime;
    if (this.jaime) {
      this.totalNbrLike++;
    } else {
      this.totalNbrLike = Math.max(0, this.totalNbrLike - 1);
    }
    this.likeToggled.emit({ id: this.idArticle, liked: this.jaime });
    this.info.emit(this.titreArticle);
  }
}
