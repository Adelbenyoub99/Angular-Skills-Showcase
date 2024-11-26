import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ListeComponent } from './liste/liste.component';
import { NgFor } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, ListeComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
// tester les operateur
secondes;
compteurSubscription: Subscription; 
title = 'labonneaffaire';
constructor( ) {}
ngOnInit(): void {
  const compteur = interval(1000).pipe(
    filter( value => value % 2 === 0),
    map(value => value % 2 === 0 ?
      `${value} est pair` :
      `${value} est impair` 
    )
  );
  this.compteurSubscription = compteur.subscribe({
    next: (v) => this.secondes = v,
    error: (e) => console.error(e),
    complete: () => console.info('complete'),

  })
}
// gérer les souscriptions 
ngOnDestroy(): void {
  this.compteurSubscription.unsubscribe();
}

}
