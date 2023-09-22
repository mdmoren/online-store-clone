import { Component } from '@angular/core';
import {
  faMagnifyingGlass,
  faUser,
  faCaretDown,
  faLocationDot,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

// Define an interface to represent the structure of menu items
interface MenuItem {
  name: string;
  textColor: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faCaretDown = faCaretDown;
  faLocationDot = faLocationDot;
  faShoppingBag = faShoppingBag;

  menuItems: MenuItem[] = [
    { name: 'Women', textColor: '#333' },
    { name: 'Men', textColor: '#333' },
    { name: 'Kids', textColor: '#333' },
    { name: 'Bags & Accesories', textColor: '#333' },
    { name: 'Athletic & Sneakers', textColor: '#333' },
    { name: 'Shops', textColor: '#333' },
    { name: 'Brands', textColor: '#333' },
    { name: 'New Arrivals', textColor: '#333' },
    { name: 'Clearance', textColor: '#C31E45' },
    { name: 'Deals', textColor: '#C31E45' },
  ];
}
