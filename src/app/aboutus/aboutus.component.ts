import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent {
  tabs: any[] = [];
  selectedTab: string = 'overview';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/Json/broadino-data.json').subscribe((data) => {
      this.tabs = data.tabs;
      this.selectedTab = this.tabs.length > 0 ? this.tabs[0].id : '';
    });
  }

  selectTab(tabId: string): void {
    this.selectedTab = tabId;
  }
}
