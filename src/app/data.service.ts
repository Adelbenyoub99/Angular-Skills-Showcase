import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from './models/article.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly defaultArticles: Article[] = [
    {
      id: 1,
      titreArticle: 'Vélo Tout Terrain VTT 29"',
      prixArticle: 280,
      description: 'VTT tout suspendu en aluminium, freins à disque hydrauliques, 21 vitesses Shimano. Excellent état, révision complète effectuée.',
      urlImg: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80',
      textAltImg: 'Vélo tout terrain VTT 29 pouces',
      dispo: true,
      totalNbrLike: 12
    },
    {
      id: 2,
      titreArticle: 'Smart TV 4K UHD 55"',
      prixArticle: 450,
      description: 'Téléviseur connecté 4K HDR avec Google TV intégré, Dolby Vision et audio surround. Livré avec télécommande vocale et câble HDMI 2.1.',
      urlImg: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
      textAltImg: 'Smart TV 4K UHD 55 pouces',
      dispo: true,
      totalNbrLike: 8
    },
    {
      id: 3,
      titreArticle: 'MacBook Pro 14" M2',
      prixArticle: 1350,
      description: 'Puce M2 Pro, 16 Go RAM unifiée, SSD 512 Go. Écran Liquid Retina XDR exceptionnel. Batterie 96% de santé, vendu avec chargeur 67W.',
      urlImg: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      textAltImg: 'MacBook Pro 14 pouces',
      dispo: false,
      totalNbrLike: 25
    },
    {
      id: 4,
      titreArticle: 'Casque Audio Sans Fil ANC',
      prixArticle: 190,
      description: 'Réduction active du bruit de niveau professionnel, autonomie 35 heures, codecs audio haute résolution LDAC et étui rigide inclus.',
      urlImg: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      textAltImg: 'Casque sans fil antibruit',
      dispo: true,
      totalNbrLike: 17
    },
    {
      id: 5,
      titreArticle: 'Appareil Photo Mirrorless 24MP',
      prixArticle: 890,
      description: 'Capteur CMOS plein format, enregistrement vidéo 4K à 60 fps, stabilisation mécanique 5 axes. Vendu avec objectif 28-70mm f/3.5-5.6.',
      urlImg: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      textAltImg: 'Appareil photo numérique mirrorless',
      dispo: true,
      totalNbrLike: 14
    },
    {
      id: 6,
      titreArticle: 'Montre Connectée Sport & Santé',
      prixArticle: 160,
      description: 'GPS double fréquence, suivi cardiaque continu, mesure SpO2, étanchéité 50m et autonomie 14 jours. Bracelet silicone hypoallergénique.',
      urlImg: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      textAltImg: 'Montre connectée sport',
      dispo: true,
      totalNbrLike: 6
    }
  ];

  private articlesSubject = new BehaviorSubject<Article[]>(this.defaultArticles);
  public articles$: Observable<Article[]> = this.articlesSubject.asObservable();

  // Firebase Realtime DB URL
  private readonly apiUrl = 'https://labonneaffaire-ec69f-default-rtbd.europe-west1.firebasedatabase.app/data.json';

  constructor(private httpClient: HttpClient) {}

  /**
   * Retourne l'observable des articles (store réactif).
   */
  getArticles(): Observable<Article[]> {
    return this.articles$;
  }

  /**
   * Recherche synchrone d'un article par son identifiant numérique.
   */
  getArticle(id: number): Article | undefined {
    return this.articlesSubject.getValue().find((a) => a.id === Number(id));
  }

  /**
   * Ajoute un article dans le catalogue et notifie les observateurs.
   */
  addArticle(item: Omit<Article, 'id'>): Article {
    const currentList = this.articlesSubject.getValue();
    const nextId = currentList.length > 0 ? Math.max(...currentList.map(a => a.id)) + 1 : 1;
    const newArticle: Article = {
      ...item,
      id: nextId,
      totalNbrLike: 0,
      urlImg: item.urlImg?.trim() ? item.urlImg : 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
      textAltImg: item.textAltImg || item.titreArticle
    };

    const updatedList = [newArticle, ...currentList];
    this.articlesSubject.next(updatedList);
    return newArticle;
  }

  /**
   * Incrémente ou décrémente le compteur de likes d'un article.
   */
  toggleLike(id: number, increment: boolean): void {
    const currentList = this.articlesSubject.getValue();
    const updatedList = currentList.map(article => {
      if (article.id === id) {
        const currentLikes = article.totalNbrLike || 0;
        const newLikes = increment ? currentLikes + 1 : Math.max(0, currentLikes - 1);
        return { ...article, totalNbrLike: newLikes };
      }
      return article;
    });
    this.articlesSubject.next(updatedList);
  }

  /**
   * Récupère la liste distante avec repli transparent sur les données locales.
   */
  getListFromServer(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.apiUrl).pipe(
      map(data => (Array.isArray(data) && data.length > 0 ? data : this.defaultArticles)),
      tap(data => this.articlesSubject.next(data)),
      catchError(() => {
        // En cas d'échec réseau ou permission Firebase, repli gracieux sur le catalogue local
        return of(this.articlesSubject.getValue());
      })
    );
  }
}
