import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdstock';

  routes: Object[] = [{
    icon: 'home',
    route: '/',
    title: 'Home',
  }, {
    icon: 'assessment',
    route: '/analyst',
    title: 'Analyst',
  }, {
    icon: 'show_chart',
    route: '/consumer',
    title: 'Consumer',
  }]
}
