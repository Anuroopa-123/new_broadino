import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menulabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menulabs.component.html',
  styleUrls: ['./menulabs.component.css'],
})
export class MenulabsComponent implements OnInit, OnDestroy {
  labs: any[] = [];
  selectedLabIndex: number = 0;
  currentItem: any = null;
  autoSlideInterval: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Load labs data from JSON
    this.http.get<any[]>('assets/Json/labscontent.json').subscribe((data) => {
      this.labs = data;

      // Select the first lab by default
      this.selectLab(0);

      // Initialize AOS animations

      // Start auto-sliding between labs every 10 seconds
      this.startAutoSlide();
    });
  }

  selectLab(index: number): void {
    if (index < 0 || index >= this.labs.length) return;

    this.selectedLabIndex = index;

    // Update currentItem based on the selected lab
    this.updateCurrentItem();

    // Reset auto-slide timer on manual selection
    this.startAutoSlide();
  }

  updateCurrentItem(): void {
    const lab = this.labs[this.selectedLabIndex];
    if (!lab) return;

    // Assuming lab has properties: title, description, software, images (array)
    this.currentItem = {
      title: lab.title,
      description: lab.description,
      software: lab.software,
      image:
        lab.images && lab.images.length > 0
          ? lab.images[0].startsWith('/')
            ? lab.images[0].slice(1)
            : lab.images[0]
          : '', // fallback to empty if no image
    };

    // Refresh AOS animations on content change
  }

  startAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }

    this.autoSlideInterval = setInterval(() => {
      let nextIndex = (this.selectedLabIndex + 1) % this.labs.length;
      this.selectLab(nextIndex);
    }, 10000); // 10 seconds interval
  }

  nextSlide(): void {
    let nextIndex = (this.selectedLabIndex + 1) % this.labs.length;
    this.selectLab(nextIndex);
  }

  prevSlide(): void {
    let prevIndex =
      (this.selectedLabIndex - 1 + this.labs.length) % this.labs.length;
    this.selectLab(prevIndex);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
