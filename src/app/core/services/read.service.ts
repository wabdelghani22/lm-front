import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx'

@Injectable()
export class ReadService {

  constructor() { }

  readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        return resolve((<string>(e.target as FileReader).result));
      };

      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsBinaryString(file);
    });
  }
}
