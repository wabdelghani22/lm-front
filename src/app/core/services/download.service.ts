import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const { ShareServiceClient } = require("@azure/storage-file-share");
import { saveAs } from 'file-saver';

@Injectable()
export class DownloadService {

  constructor() { }

  downloadFileFromUrl(url) {
    const account = environment.accountName;
    const sas = environment.sasToken;

    const fileName = url.split('/')[1];

    const serviceClient = new ShareServiceClient(
      `https://${account}.file.core.windows.net${sas}`
    );

    const fileClient = serviceClient
      .getShareClient(environment.shareName)
      .rootDirectoryClient.getFileClient(url);

    fileClient.download(0).then(downloadFileResponse => {
      downloadFileResponse.blobBody.then(blob => {
        saveAs(blob, fileName)
      })
    })
  }

  downloadFileFromData(tableData, tableHeaders, fileName) {
    tableData.unshift(tableHeaders)
    tableData = tableData.map(x => x.join(';'))

    const content = tableData.join('\n')
    const csvBlob = new Blob([content], { type: 'text/csv' });

    fileName = fileName + '-' + new Date().getTime().toString() + '.csv'

    saveAs(csvBlob, fileName)
  }
}
