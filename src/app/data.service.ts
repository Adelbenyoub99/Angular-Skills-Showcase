import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*listeArticle = [
    {
      id: 1,
      titreArticle: "Vélo", 
      prixArticle: 80, 
      description: "Vélo tout terrain",
      urlImg: "../assets/images/image400x250.gif",
      textAltImg: "image vélo",
      dispo: false
    },
    {
      id: 2,
      titreArticle: "TV", 
      prixArticle: 110, 
      description: "TV 40 pouces",
      urlImg: "../assets/images/image400x250.gif",
      textAltImg: "Image TV",
      dispo: true
    }
    ]*/
    listeArticle: any = [];
  constructor( private httpClient: HttpClient) { }

  getArticle(id: number){
    const article = this.listeArticle.find((a) => {
     return a.id == id;
    });
    return article;
  }

  getListFromServer(){
  return this.httpClient.get<any []>("https://labonneaffaire-ec69f-default-rtbd.europe-west1.firebasedatabase.app/data.json");

  }
}
