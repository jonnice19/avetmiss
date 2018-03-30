import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  nav = [
    { link: '/training-organisations', name: 'Training Organisation', exact: true, icon: 'fa-building' },
    { link: '/delivery-locations', name: 'Delivery Location', exact: true, icon: 'fa-location-arrow' },
    { link: '/trainers', name: 'Trainer', exact: true, icon: 'fa-vcard' },
    { link: '/programs', name: 'Program', exact: true, icon: 'fa-calendar-o' },
    { link: '/subjects', name: 'Subject', exact: true, icon: 'fa-cube' },
    { link: '/clients', name: 'Client', exact: true, icon: 'fa-user' },
    { link: '/client-activities', name: 'Client Training Activity', exact: true, icon: 'fa-cubes' },
    { link: '/program-completion', name: 'Program Completion', exact: true, icon: 'fa-calendar-check-o' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
