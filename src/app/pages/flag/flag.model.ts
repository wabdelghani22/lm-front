// Table data
export interface Table {
  index: number
  matricule: number;
  type: string;
  code_sage: string;
  rubrique_sage: string;
  code_hru: string;
  rubrique_hru: string;
  diff: number;
}

// Search Data
export interface SearchResult {
  tables: Table[];
  total: number;
}
