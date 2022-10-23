// Table data
export interface Table {
  matricule: number;
  contrat: number;
  bulletin: number;
  categorie: string;
  missing: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
