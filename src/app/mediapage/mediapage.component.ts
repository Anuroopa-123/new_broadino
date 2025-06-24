import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mediapage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mediapage.component.html',
  styleUrls: ['./mediapage.component.css'],
})
export class MediapageComponent {
  images: string[] = [];
  selectedImage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<string[]>('assets/mediaimages.json').subscribe((data) => {
      this.images = data;
    });
  }

  openModal(image: string): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
