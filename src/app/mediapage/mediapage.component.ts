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
images: { src: string; name: string }[] = [];
selectedImage: { src: string; name: string } | null = null;


  constructor(private http: HttpClient) {}

ngOnInit(): void {
    this.http.get<{ src: string; name: string }[]>('assets/Json/mediaimages.json')
      .subscribe((data) => {
        this.images = data;
      });

}


  openModal(image: { src: string; name: string }): void {
    this.selectedImage = image;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}
