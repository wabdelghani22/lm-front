// Table data
export interface Table {
  matricule: number;
  indication: string;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
