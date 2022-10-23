// Table data
export interface Table {
  matricule: number;
  categorie: string;
  libelle: string;
  base: number;
  t1: number;
  m1: number;
  t2: number;
  m2: number;
}



// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
