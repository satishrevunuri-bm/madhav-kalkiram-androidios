import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
  standalone: false
})
export class ReaderPage implements OnInit {
  documentUrl: string = '';
  documentType: 'pdf' | 'html' | 'unknown' = 'unknown';
  safeHtmlUrl: SafeResourceUrl | null = null;
  documentTitle: string = 'Reader';
  zoomLevel: number = 1.0;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['url']) {
        this.documentUrl = params['url'];
        
        // Infer type from URL extension
        if (this.documentUrl.toLowerCase().endsWith('.pdf')) {
          this.documentType = 'pdf';
        } else if (this.documentUrl.toLowerCase().endsWith('.html') || this.documentUrl.toLowerCase().endsWith('.htm')) {
          this.documentType = 'html';
          this.safeHtmlUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.documentUrl);
        }

        // Infer title from filename
        const filename = this.documentUrl.split('/').pop();
        if (filename) {
          // e.g., "bhavishya_malika_en.html" -> "bhavishya malika en"
          this.documentTitle = filename.split('.')[0].replace(/_/g, ' ').toUpperCase();
        }
      }
    });
  }

  goBack() {
    this.location.back();
  }

  zoomIn() {
    this.zoomLevel += 0.25;
  }

  zoomOut() {
    if (this.zoomLevel > 0.5) {
      this.zoomLevel -= 0.25;
    }
  }
}
