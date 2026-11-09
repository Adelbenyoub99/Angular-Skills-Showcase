import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  titleToAdd: string = '';
  priceToAdd: number | null = null;
  descriptionToAdd: string = '';
  imageUrlToAdd: string = '';
  dispoToAdd: boolean = true;

  isSubmitting: boolean = false;
  successMessage: string = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.isSubmitting = true;

    this.dataService.addArticle({
      titreArticle: this.titleToAdd.trim(),
      prixArticle: Number(this.priceToAdd),
      description: this.descriptionToAdd.trim(),
      urlImg: this.imageUrlToAdd.trim(),
      textAltImg: this.titleToAdd.trim(),
      dispo: this.dispoToAdd
    });

    this.successMessage = 'Votre annonce a été publiée avec succès ! Redirection en cours...';

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1200);
  }
}
