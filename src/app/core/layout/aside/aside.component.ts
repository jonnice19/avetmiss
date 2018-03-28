import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  nav = [
    { link: '/training-organisation', name: 'Training Organisation', exact: true, icon: 'fa-building' },
    { link: '/training-organisation-delivery-location', name: 'Delivery Location', exact: true, icon: 'fa-location-arrow' },
    { link: '/', name: 'Trainer', exact: true, icon: 'fa-vcard' },
    { link: '/programs', name: 'Program', exact: true, icon: 'fa-calendar-o' },
    { link: '/', name: 'Subject', exact: true, icon: 'fa-cube' },
    { link: '/', name: 'Client', exact: true, icon: 'fa-user' },
    { link: '/', name: 'Client Training Activity', exact: true, icon: 'fa-cubes' },
    { link: '/', name: 'Program Completion', exact: true, icon: 'fa-calendar-check-o' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
