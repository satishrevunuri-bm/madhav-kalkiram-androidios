import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Network } from '@capacitor/network';
import { lastValueFrom } from 'rxjs';

export interface DocumentInfo {
  id: string;
  url: string;
  title: string;
  type: 'pdf' | 'html';
  localPath?: string;
  isDownloaded: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private readonly CACHE_KEY = 'offline_documents';
  
  constructor(private http: HttpClient) {}

  /**
   * Retrieves the current list of saved documents metadata from Preferences
   */
  async getSavedDocuments(): Promise<DocumentInfo[]> {
    const { value } = await Preferences.get({ key: this.CACHE_KEY });
    return value ? JSON.parse(value) : [];
  }

  /**
   * Save the updated documents list to Preferences
   */
  private async saveDocumentsList(docs: DocumentInfo[]): Promise<void> {
    await Preferences.set({
      key: this.CACHE_KEY,
      value: JSON.stringify(docs)
    });
  }

  /**
   * Check if the device is currently online
   */
  async isOnline(): Promise<boolean> {
    const status = await Network.getStatus();
    return status.connected;
  }

  /**
   * Downloads a file and saves it locally
   */
  async downloadAndCacheFile(doc: DocumentInfo): Promise<boolean> {
    try {
      // 1. Fetch file as blob
      const blob = await lastValueFrom(this.http.get(doc.url, { responseType: 'blob' }));
      
      // 2. Convert Blob to Base64
      const base64Data = await this.blobToBase64(blob);

      // 3. Save to filesystem
      const fileName = `${doc.id}.${doc.type}`;
      const savedFile = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Data,
      });

      // 4. Update metadata
      const savedDocs = await this.getSavedDocuments();
      const existingIndex = savedDocs.findIndex(d => d.id === doc.id);
      
      const updatedDoc: DocumentInfo = {
        ...doc,
        localPath: savedFile.uri,
        isDownloaded: true
      };

      if (existingIndex > -1) {
        savedDocs[existingIndex] = updatedDoc;
      } else {
        savedDocs.push(updatedDoc);
      }

      await this.saveDocumentsList(savedDocs);
      return true;

    } catch (error) {
      console.error('Error downloading file:', error);
      return false;
    }
  }

  /**
   * Reads a cached file from the local filesystem
   * Returns base64 string for PDF or utf8 string for HTML
   */
  async readCachedFile(doc: DocumentInfo): Promise<string | null> {
    if (!doc.isDownloaded) return null;

    try {
      const fileName = `${doc.id}.${doc.type}`;
      const file = await Filesystem.readFile({
        path: fileName,
        directory: Directory.Data,
        encoding: doc.type === 'html' ? Encoding.UTF8 : undefined
      });
      return file.data as string;
    } catch (e) {
      console.error('Error reading cached file', e);
      return null;
    }
  }

  /**
   * Helper to convert blob to base64
   */
  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove the data:*/*;base64, prefix
          resolve(reader.result.split(',')[1]);
        } else {
          reject(new Error('Invalid reader result'));
        }
      };
      reader.readAsDataURL(blob);
    });
  }
}
