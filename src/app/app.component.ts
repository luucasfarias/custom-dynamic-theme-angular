import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThemesService } from './services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-dynamic-theme';

  constructor(private themeService: ThemesService) {}

  ngOnInit(): void {
    this.themeService.loadTheme(environment.availableTheme);
  }

  changeTheme() {
    console.log('teste');

    this.themeService.loadTheme('secondary');
  }
}
