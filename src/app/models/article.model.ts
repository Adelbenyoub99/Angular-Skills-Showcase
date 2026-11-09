export interface Article {
  id: number;
  titreArticle: string;
  prixArticle: number;
  description: string;
  urlImg: string;
  textAltImg: string;
  dispo: boolean;
  totalNbrLike?: number;
}

